# Webpack

```js [15]
// app.js
// Register the `MyEmbeddedApp` to the global object.
(function registerToGlobal() {
  let theGlobal;
  if (typeof window !== "undefined") {
    theGlobal = window;
  } else if (typeof global !== "undefined") {
    theGlobal = global;
  } else if (typeof self !== "undefined") {
    theGlobal = self;
  }

  const globalName = "MyEmbeddedApp";
  if (!theGlobal[globalName]) {
    theGlobal[globalName] = MyEmbeddedApp;
  }
})();
```


NOTE:

Finally the `MyEmbeddedApp` class is registered on the global for use at a later time.
