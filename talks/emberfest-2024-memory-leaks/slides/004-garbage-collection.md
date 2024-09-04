# The Garbage Collector

JavaScript has an automatic memory management through a Garbage Collector (GC).

```js
const me = { name: "BobrImperator" };

console.log(me); // { name: "BobrImperator" }
```

1. Allocated an object with property `name`
2. Assigned its reference to `me`
3. Passed that reference to `console.log`
4. `me` is not used elsewhere, the Garbage Collector cleans up.

Note:
Meaning that we as developers don't need to worry about allocating and deallocating space for data and then manage their references.
Instead we can very trivially create a variable and then at *some point in time* the Garbage Collector will get rid of it.

In JavaScript I think it's fair to interchangeably use "pointer" and "reference" to mean the same thing.
Technically there are pointers but not in such a way as in some other languages.
Anyway, I don't think it's worth discussing further.
