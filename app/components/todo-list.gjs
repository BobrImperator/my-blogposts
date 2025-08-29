import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

const TodoItem = <template>
<li>
  {{@todo.title}}
  {{#if @canRemoveTodos}}
    <button {{on "click" @removeTodo}}>X</button>
  {{/if}}
</li>
</template>;

export default class TodoList extends Component  {
  addTodo = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;

    event.target.reset();

    const todos = [...this.args.todos, { title }];
    this.args.onChange(todos);
  };

  removeTodo = (todo) => {
    const todos = this.args.todos.filter((t) => t !== todo);
    this.args.onChange(todos);
  }

  <template>
    {{#each @todos as |todo|}}
      <TodoItem @todo={{todo}} @removeTodo={{fn this.removeTodo todo}} @canRemoveTodos={{@canRemoveTodos}} />
    {{/each}}

    <form {{on "submit" this.addTodo}}>
      <input type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  </template>
}

