```js
import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class LeakerComponent extends Component {
  constructor() {
    super(...arguments);

    window.addEventListener("click", this.handleClick);
  }

  willDestroy() {
    window.removeEventListener("click", this.handleClick);
  }

  @action
  handleClick() {}
```

Note:

The fix is simple, make sure to use methods or named functions and call `removeEventListener` when your component is going to be destroyed.

In these examples we're using `window`, but in reality, a leak could be caused by anything that outlives our component.
It could be route, it could be a parent component.
