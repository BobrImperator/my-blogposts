import Application from 'emberfest-2024-memory-leaks/app';
import config from 'emberfest-2024-memory-leaks/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import { detectMemoryLeak } from 'memory-leak-detector';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

// TODO: Figure out how to run assertion after the test suite has run.
//
//QUnit.done(async (...args) => {
//  console.log('done', args);
//  const final = true;
//  await detectMemoryLeak('title', document.title, );
//});

start();
