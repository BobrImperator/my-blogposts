Another look

![confirming the properties](/snapshot/class_group_2.png)

'Class' is retained by 'controller:index' property in Object

Note:
Taking another look at Retainers on a screenshot from before.

Personally I find the wording confusing but there is a way to make reading all that less scary.

Try to read it this way:

`Class` is retained by `controller:index` property in `Object`.
`Class` is retained by `destroyable` variable in `system / Context`.

notice that `destroyable` is purple, because it's not a property but a variable instead.
so `Class` is retained as a variable called `destroyable` in system / Context, would be more appropriate.
