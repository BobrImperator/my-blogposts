# Functionality

```js
const [todos, setTodos] = useState([]);

const runEmberApp = (node) => {
    if (node && !initialized.current) {
      new EmbeddedEmber(node, { onTodosChanged: setTodos, canRemoveTodos: true }).start();
      initialized.current = true;
    }
};

return <>
    <div>{todos.length}</div>
</>
```

Note:

In React it's provided like this.
