```js
// credit https://jakearchibald.com/2024/garbage-collection-and-closures/
function demo() {
  const bigArrayBuffer = new ArrayBuffer(100_000_000); // 100MB;

  globalThis.innerFunc1 = () => {
    console.log(bigArrayBuffer.byteLength);
  };

  globalThis.innerFunc2 = () => {
    console.log("hello");
  };
}

demo();
// bigArrayBuffer is retained, as expected.

globalThis.innerFunc1 = undefined;
// bigArrayBuffer is still retained, as unexpected.

globalThis.innerFunc2 = undefined;
// bigArrayBuffer can now be collected.
```

Note:
Here's closures that keep access to their contexts.
The Javascript engine sort of creates an object that represents the context of `demo` and the it shares it with `innerFunc1` and `innerFunc2`.

We've mentioned previously that an object must lose access to all of its references before it's cleaned up.
Requiring us to detach both functions from `globalThis`.
