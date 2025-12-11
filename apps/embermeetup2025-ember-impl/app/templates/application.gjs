import { pageTitle } from 'ember-page-title';
import { WelcomePage } from 'ember-welcome-page';
import tomster from '../../assets/bielsko-tomster.webp'

// <!-- @EMBERMEETUP2025 -->

<template>
  {{pageTitle "EmberTodoViteTest"}}

  {{outlet}}

  <img width="500px" src={{tomster}} />
  {{! The following component displays Ember's default welcome message. }}
  <WelcomePage />
  {{! Feel free to remove this! }}

</template>
