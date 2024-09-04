```js
import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class LeakerComponent extends Component {
  constructor() {
    super(...arguments);

    window.addEventListener('click', () => {
      this.args.readSomething;
    });
  }
```

Note:
In both scenarios we pass a function that references the LeakerComponent, which becomes a part of their contexts, carrying it around.
