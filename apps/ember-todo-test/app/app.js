import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-todo-test/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  autoboot = false;
}

loadInitializers(App, config.modulePrefix);

class MyEmbeddedApp {
  #application;
  #appInstance;

  options;

  constructor(element, options = { canRemoveTodos: true }) {
    this.#application = App.create({ rootElement: element, autoboot: false });
    // Register the configuration options in the Ember's DI.
    // Mimics the behavior of resolving the `config/environment.js` i.e. resolveRegistration('config:environment').
    this.#application.register('config:embedded', options, {
      instantiate: false,
    });
    this.options = options;
  }

  get #appController() {
    return this.#appInstance.lookup('controller:application');
  }

  async start() {
    const appInstance = await this.#application.visit('/');
    this.#appInstance = appInstance;

    return this;
  }

  // todos-change
  on(name, callback) {
    this.#appController[name] = callback;
  }
}

(function registerToGlobal() {
  let theGlobal;
  if (typeof window !== 'undefined') {
    theGlobal = window;
  } else if (typeof global !== 'undefined') {
    theGlobal = global;
  } else if (typeof self !== 'undefined') {
    theGlobal = self;
  }

  const globalName = 'MyEmbeddedApp';
  if (!theGlobal[globalName]) {
    theGlobal[globalName] = MyEmbeddedApp;
  }
})();

// Usage:
// a = new window.MyEmbeddedApp(document.querySelector('body'), { canRemoveTodos: true })
// a.start();
