import Application from 'emberfest-2024-memory-leaks-app/app';
import config from 'emberfest-2024-memory-leaks-app/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import { detectLeakingClasses } from 'memory-leak-detector';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

// this checks whether there are any of `our` classes retained after all tests have passed.
Testem.afterTests(async (_config, _data, callback) => {
  await detectLeakingClasses('title', document.title);
  callback();
});

start();
