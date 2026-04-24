```js x-small-font
// app.js

import Application from "@ember/application";
import loadInitializers from "ember-load-initializers";

export default class App extends Application { ... }
loadInitializers(App, config.modulePrefix);

class MyEmbeddedApp {
  #application;
  #appInstance;

  options;

  constructor(element, options = { canRemoveTodos: true }) {
    this.#application = App.create({ rootElement: element, autoboot: false });

    // Register provided options during startup 
    this.#application.register("config:embedded", options, {
      instantiate: false,
    });
    this.options = options;
  }

  async start() {
    // Boot the Ember app.
    // Visit the application route.
    const appInstance = await this.#application.visit("/");
    this.#appInstance = appInstance;

    return this;
  }
}
```

NOTE:

We create a class around our App class to provide a communication interface. This is true for both the old and the new approach.
Currently this is our way to allow communication between the different parts of the app. 
