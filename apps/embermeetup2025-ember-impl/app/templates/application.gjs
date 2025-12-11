import { pageTitle } from 'ember-page-title';
import { WelcomePage } from 'ember-welcome-page';
import soldierAttack from '../../tiny/characters/soldier/Soldier/Soldier.png'

// <!-- @EMBERMEETUP2025 -->

<template>
  {{pageTitle "EmberTodoViteTest"}}

  {{outlet}}

  {{! The following component displays Ember's default welcome message. }}
  <WelcomePage />
  {{! Feel free to remove this! }}

  <img src={{soldierAttack}} />
</template>
