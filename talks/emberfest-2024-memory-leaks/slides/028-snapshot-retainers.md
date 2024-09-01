Another look

![confirming the properties](/snapshot/class_group_2.png)

'Class' lives as 'controller:index' in Object

Note:
Taking another look at Retainers on a screenshot from before.

Personally I find the wording confusing but there is a way to make reading all that less scary.

Try to read it this way:

`Class` lives as `controller:index` in Object
`Class` lives as `destroyable` in system / Context

notice that `destroyable` is purple, because it's not a property but a variable instead.
so `Class` lives as `destroyable` variable in system / Context, would be more appropriate.

Another way of putting it could be:
`Class` is retained by `controller:index` property in `Object`.
`Class` is retained by `destroyable` variable in `system / Context`.
