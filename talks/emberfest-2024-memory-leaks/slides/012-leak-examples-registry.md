```js
import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from "@ember/service";

export default class LeakerComponent extends Component {
  @service componentRegistry;

  @action
  registerComponent(registeredComponent) {
    this.componentRegistry.add(registeredComponent);
  }
}
```

Note:
Here we have a registry of components.
As I've mentioned, this is asking for trouble because it's not instanced in away, it's pretty much global and we're adding more and more components to that.
