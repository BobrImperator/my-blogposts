import Controller from '@ember/controller';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked todos = [];

  get config() {
    return getOwner(this).lookup('config:embedded');
  }

  receiveTodos = (todos) => {
    this.todos = todos;

    // Calling callback of a fake event handler.
    this.config.onTodosChanged?.(todos);
  }
}
