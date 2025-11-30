![Test results](/snapshot/memory_leak_1.png)
![Github CI](/snapshot/memory_leak_2.png)
![Github CI](/snapshot/memory_leak_3.png)

Note:
As you can see on that image, there's a passing Qunit test-suite that ultimately fails because of the last check done by `memory-leak-detector`.

On `Testem.afterTests` hook, we make an API call to a node API that scans the project code for Class names inside our application and then checks whether there are any references in a snapshot.

If there are some that are leaking, then the process exits with an error code.
