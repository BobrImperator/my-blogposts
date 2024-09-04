# How memory leaks are made?

<style type="text/css">
.overview g[data-id="UsersRoute"] rect.label-container {
  fill: gray !important;
}
</style>

```mermaid overview
%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%

stateDiagram-v2
    system --> Application: Window/Document
    Application --> UsersRoute
    Application --> AnotherRoute
    Application --> Service
    UsersRoute --> UserListComponent
    UserListComponent --> UserItemComponent

    AnotherRoute --> HTML
    UserListComponent --> HTML
    UserItemComponent --> HTML
    SidebarComponent --> HTML
```

Note:
Here's a simple, approximate diagram of an application we'll be debugging later.
Greyed out tile is the current route.

There's the system stuff i.e. whatever browser provides.
The (Ember) Application, some of it's entities, where Route and Components usually result in some HTML.

When we'd now go to `AnotherRoute` we'd expect `UsersRoute` to teardown it's HTML and release related components.
