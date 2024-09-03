![Failed test suite](/snapshot/memory_leak_5.png)
![Qunit test details](/snapshot/memory_leak_6.png)

Note:
As you can see on the images, the `detectLeakingClasses` that runs after test-suite completes didn't report any errors.
The issue was however caught by `detectMemoryLeak` which does a specific assertion *while* the whole application is still _alive_.

The issue wasn't exactly related to `ember-in-viewport` but a library it uses - `intersection-observer-admin`.
Good news is that Our Team managed to find the problem and fix it for everyone.

Fix was released in `intersection-observer-admin@0.3.4`.

Affected libraries `ember-in-viewport`, `ember-scroll-modifiers`
