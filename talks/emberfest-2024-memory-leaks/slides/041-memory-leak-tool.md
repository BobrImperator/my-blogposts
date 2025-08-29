# Why?

- Revive `ember-cli-memory-leak-detector` and make it usable in modern apps.
- Add possibility to use it elsewhere.
- Allow testing against memory build-ups not related to globals.

Note:
I essentially cloned the ember-cli-memory-leak-detector, the reason for cloning was that the addon was tightly coupled to certain qunit and Testem versions, making them unusable today.

Additionally, I'd potentially like to use this tool elsewhere e.g. in Cypress.

Lastly, I also wanted to add an ability to assert against specific kind of leaks.
Some leaks won't necessarily involve globals such as `window` or `document`, which are the only ones that can be detected after running the test suite.
