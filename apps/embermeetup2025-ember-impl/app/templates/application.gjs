// <!-- @EMBERMEETUP2025 -->
import tomster from '../../assets/bielsko-tomster.webp'
import { getOwner } from "@ember/application";
import { tracked } from "@glimmer/tracking";
import '../styles/app.css';
import TodoList from '../components/todo-list.gjs';
import { WelcomePage } from 'ember-welcome-page';

import Component from '@glimmer/component';

export default class ApplicationRouteComponent extends Component {
  @tracked todos = [];

  config = getOwner(this).lookup("config:embedded");

  receiveTodos = todos => {
    this.todos = todos;

    // Calling callback of a fake event handler.
    this.config.onTodosChanged?.(todos);
  };

  <template>
    {{outlet}}

    <div class="ember-todo-test">
      <TodoList @todos={{this.todos}} @onChange={{this.receiveTodos}} @canRemoveTodos={{this.config.canRemoveTodos}} />
    </div>

    <img width="500px" src={{tomster}} />

    <WelcomePage />
  </template>
}
