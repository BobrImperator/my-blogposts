```js
async function triggerPagination() {
  for (let index = 0; index < 10; index++) {
    await document.querySelector("[data-test-pagination-next]").click();
    await new Promise((resolve) => setTimeout(resolve, 250));

    await document.querySelector("[data-test-pagination-previous]").click();
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}

triggerPagination();
```

![memory trick#2](/snapshot/memory_leak_trick_2.png)

Note:
Create a script to quickly reproduce the issue from a clean slate in production.

Watch out for any references being console.logged though.
