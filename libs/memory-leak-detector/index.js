export async function detectMemoryLeak(by, value, assertions) {
  let value_ = encodeURI(value);
  let by_ = encodeURI(by);
  console.log(assertions);
  let response = await fetch(
    `http://localhost:3000/detect_memory_leak?by=${by_}&value=${value_}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assertions),
    },
  );
  let json = await response.json();

  return json.results;
}
