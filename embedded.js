import App from './app/app';

export default class MyEmbeddedApp {
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

  async start() {
    // Boot the Ember app.
    // Visit the application route.
    const appInstance = await this.#application.visit('/');
    this.#appInstance = appInstance;

    return this;
  }
}
