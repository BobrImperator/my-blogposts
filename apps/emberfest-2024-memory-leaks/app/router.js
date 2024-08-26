import EmberRouter from '@ember/routing/router';
import config from 'emberfest-2024-memory-leaks-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('another');
  this.route('users');
});
