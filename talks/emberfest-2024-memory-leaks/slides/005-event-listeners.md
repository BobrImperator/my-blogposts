# How memory leaks are made?

<!-- Showcase how to cause a memory-leak using event listeners -->
<!-- TODO(bobrimperator): add a graph showing an orphaned node, using mermaid https://www.npmjs.com/package/reveal.js-mermaid-plugin --> 

```js
// Ripped from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#allocation_in_javascript
const n = 123; // allocates memory for a number
const s = "azerty"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener(
  "click",
  () => {
    someElement.style.backgroundColor = "blue";
  },
  false,
);
```

Note:
