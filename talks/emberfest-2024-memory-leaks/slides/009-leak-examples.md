```js
import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class LeakerComponent extends Component {
  constructor() {
    super(...arguments);

    window.addEventListener("click", this.handleClick);
  }

  @action
  handleClick() {}
}
```

Note:
Creating a memory leak can be as simple as that.

We create an event handler and pass it a function which has our component as the context.
Because `Window` essentially holds a reference to our component now, it can't be sweeped by the GC, because from GC's perspective, the component is still reachable.
