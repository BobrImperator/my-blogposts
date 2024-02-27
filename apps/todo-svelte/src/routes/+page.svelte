<script>
  let removableTodosCount;
  let nonRemovableTodosCount;

	async function bootEmbeddedApp(node, { canRemoveTodos, onTodosChanged }) {
    let options = {
      canRemoveTodos,
      onTodosChanged
    };

    const app = new window.MyEmbeddedApp(node, options)
   
    await app.start();

		return {
			destroy() {
				// the node has been removed from the DOM
			}
		};
	}
</script>


<div use:bootEmbeddedApp={{ canRemoveTodos: true, onTodosChanged: (todos) => removableTodosCount = todos.length }} id="embedded-app-1">
  App with removable todos ({removableTodosCount})
</div> 

<div use:bootEmbeddedApp={{ canRemoveTodos: false, onTodosChanged: (todos) => nonRemovableTodosCount = todos.length }} id="embedded-app-2">
  App without removable todos ({nonRemovableTodosCount})
</div> 

