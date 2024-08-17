import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LeakerComponent extends Component {
  constructor() {
    super(...arguments);

    // window.addEventListener('click', this.handleClick);
  }

  @action
  handleClick(a) {
    console.log(this, a);
  }

  handleClick = () => {
    console.log(this);
  };
}
