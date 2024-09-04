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

  @action
  unregisterComponent(registerComponent) {
    this.componentRegistry.remove(registeredComponent);
  }
}
```

Note:
The fix is again pretty simple, we need to make sure that destroyed components are unregistered.
