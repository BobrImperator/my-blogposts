const detectMemoryLeak = require("./detect-memory-leak.js");
const inventoryClasses = require("./inventory-classes.js");
const express = require("express");
const cors = require("cors");

function main() {
  const [, , sourceDirectory] = process.argv;
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.post(
    "/detect_memory_leak",
    handleDetectMemoryLinkRequest({
      port: 9222,
      host: "127.0.0.1",
      classes: inventoryClasses(sourceDirectory),
      writeSnapshot: false,
    }),
  );

  app.listen(3000, () => {
    console.log("Memory Leak Detector listening on port :3000");
  });
}

function handleDetectMemoryLinkRequest(config) {
  return async function (req, res) {
    const assertions = req.body;
    console.log(assertions);
    try {
      const results = await detectMemoryLeak({
        identifier: {
          by: decodeURI(req.query.by),
          value: decodeURI(req.query.value),
        },
        assertions,
        ...config,
      });


      res.json({ results: Object.fromEntries(results) });
    } catch (error) {
      console.error({ message: error });
      res.json({ error: `${error}` });
    }
  };
}

main();
