import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { runInDebug } from '@ember/debug';

let a;

runInDebug(() => {
  a = new Set();
});

function consoleLog(a) {
  return a.id;
}

export default class LeakerComponent extends Component {
  @service session;
  @service user;

  comp = null;

  constructor() {
    super(...arguments);

    //this.session.initialize();
    //this.user.loadUser();
    window.addEventListener('click', this.handleClick);

    // a = () => console.log(this);
  }

  // willDestroy() {
  //   window.removeEventListener('click', this.handleClick);
  // }

  @action
  handleClick(a) {
    // this.session.initialize();
    // this.user.loadUser();
    //console.log(this);
  }

  @action
  registerComponent(registeredComponent) {
    //console.log(this);

    // this.session.initialize();
    // this.user.loadUser();
    consoleLog(registeredComponent);
    this.comp = registeredComponent;
    a?.add(registeredComponent);
  }

  // handleClick = () => {
  //   this.session.initialize();
  //   this.user.loadUser();
  //   console.log(this);
  // };
}
