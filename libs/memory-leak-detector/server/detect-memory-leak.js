const CDP = require("chrome-remote-interface");
const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const Heapsnapshot = require("heapsnapshot");

module.exports = async function detectMemoryLeak({
  identifier,
  assertions,
  port,
  host,
  writeSnapshot,
}) {
  const client = await createCDPClient(identifier, port, host);
  const snapshot = await captureHeapSnapshot(client, writeSnapshot);
  const retainedClasses = findRetainedClassesInSnapshot(assertions, snapshot);

  return retainedClasses;
};

async function createCDPClient(identifier, port, host) {
  try {
    const targets = await CDP.List({ port, host });
    console.log(targets);
    console.log(identifier);
    const testTarget = targets.find((target) => {
      const found = target[identifier.by].includes(identifier.value);

      return found;
    });
    if (!testTarget) {
      throw new Error(
        `Tab titled "${JSON.stringify(identifier)}" did not match any of: ${targets
          .map((t) => `"${t.title}"`)
          .join(", ")}`,
      );
    }
    const client = await CDP({ target: testTarget, port, host });
    return client;
  } catch (e) {
    if (e.message.includes("ECONNREFUSED")) {
      e.message +=
        "\nMake sure to configure --remote-debugging-port in testem.js";
    }
    throw `Unable to connect to chrome. ${e}`;
  }
}

async function captureHeapSnapshot(client, writeSnapshot) {
  await client.HeapProfiler.collectGarbage();

  let heapSnapshotChunks = [];
  client.on("HeapProfiler.addHeapSnapshotChunk", ({ chunk }) => {
    heapSnapshotChunks.push(chunk);
  });

  await client.HeapProfiler.takeHeapSnapshot({ reportProgress: false });

  if (writeSnapshot) {
    await writeFile("Heap.heapsnapshot", heapSnapshotChunks.join(""));
  }

  const parsedHeapSnapshot = JSON.parse(heapSnapshotChunks.join(""));

  return new Heapsnapshot(parsedHeapSnapshot);
}

function findRetainedClassesInSnapshot(assertions, snapshot) {
  const retainedClasses = new Map(Object.entries(assertions).map(([key, _value]) => [key, 0]));

  for (const node of snapshot) {
    if (node.type === "object" && retainedClasses.has(node.name)) {
      let retainedCount = retainedClasses.get(node.name);
      retainedClasses.set(node.name, retainedCount + 1);
    }
  }

  return retainedClasses;
}
