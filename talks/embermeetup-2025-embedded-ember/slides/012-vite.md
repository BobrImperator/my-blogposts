# We're on Vite

```js x-small-font [1-2, 4]
// embedded.js
import App from './app/app';

export default class MyEmbeddedApp {
  #application;
  #appInstance;

  options;

  constructor(element, options) {
    this.#application = App.create({ rootElement: element, autoboot: false });
    this.options = options;
  }

  async start() {
    // Boot the Ember app.
    // Visit the application route.
    const appInstance = await this.#application.visit('/');
    this.#appInstance = appInstance;

    return this;
  }
}

```

Note:

First we need a new entrypoint to point Vite at. The app will be built with Library mode so a js file is all that's needed. The interface is the same as in the old case, it's still how we'll initialize the app to allow communication between users.
