import TodoList from 'ember-todo-vite-test/components/todo-list';
import { pageTitle } from 'ember-page-title';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { getOwner} from '@ember/owner';

export default class ApplicationRoute extends Component {
  @tracked todos = [];

  get config() {
    return getOwner(this).lookup('config:embedded');
  }

  receiveTodos = (todos) => {
    this.todos = todos;

    // Calling callback of a fake event handler.
    this.config.onTodosChanged?.(todos);
  };
  <template>
    {{pageTitle "EmberTodoViteTest"}}

    <div class="ember-todo-test">
      <TodoList
        @todos={{this.todos}}
        @onChange={{this.receiveTodos}}
        @canRemoveTodos={{this.config.canRemoveTodos}}
      />
    </div>

    {{outlet}}
  </template>
}
