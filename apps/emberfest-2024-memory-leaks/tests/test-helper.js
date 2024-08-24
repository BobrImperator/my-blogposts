import Application from 'emberfest-2024-memory-leaks/app';
import config from 'emberfest-2024-memory-leaks/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import { detectLeakingClasses } from 'memory-leak-detector';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

// this checks whether there are any of `our` classes retained after all tests have passed.
Testem.on('after-tests-complete', (async (_config, _data, callback) => {
  await detectLeakingClasses('title', document.title);
}));

start();
