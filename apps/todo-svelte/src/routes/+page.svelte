<script>
  let removableTodosCount;
  let nonRemovableTodosCount;

	async function bootEmbeddedApp(node, { canRemoveTodos, onTodosChange }) {
    let options = {
      canRemoveTodos
    };

    const app = new window.MyEmbeddedApp(node, options)
   
    await app.start();

    onTodosChange && app.on('todos-change', onTodosChange);

		return {
			destroy() {
				// the node has been removed from the DOM
			}
		};
	}
</script>


<div use:bootEmbeddedApp={{ canRemoveTodos: true, onTodosChange: (todos) => removableTodosCount = todos.length }} id="embedded-app-1">
  App with removable todos ({removableTodosCount})
</div> 

<div use:bootEmbeddedApp={{ canRemoveTodos: false, onTodosChange: (todos) => nonRemovableTodosCount = todos.length }} id="embedded-app-2">
  App without removable todos ({nonRemovableTodosCount})
</div> 

