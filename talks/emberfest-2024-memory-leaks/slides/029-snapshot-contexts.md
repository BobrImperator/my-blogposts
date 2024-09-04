![confirming the properties](/snapshot/class_group_2.png)

- System / Context
- context in ()

Note:
`System / Context` is an object that the engine creates to identify contexts for closures and classes.

`context in ()` means that an object lives as a context of an anonymous closure.
In other words, a closure has access to that reference because it captured it's outer scope.
