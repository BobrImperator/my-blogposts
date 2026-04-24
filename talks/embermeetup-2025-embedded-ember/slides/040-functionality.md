# Functionality

```gjs
export default class ApplicationRouteComponent extends Component {
  @tracked todos = [];
  config = getOwner(this).lookup("config:embedded");

  receiveTodos = todos => {
    this.todos = todos;

    // Calling callback of a fake event handler.
    this.config.onTodosChanged?.(todos);
  };

  <template>
    <div class="ember-todo-test">
      <TodoList @todos={{this.todos}} @onChange={{this.receiveTodos}} @canRemoveTodos={{this.config.canRemoveTodos}} />
    </div>
  </template>
}
```

Note:

Here's a basic todo functionality, notice how we're making use of the embedded config.
