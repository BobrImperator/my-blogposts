<script>
  import { onMount } from 'svelte';
  let removableTodosCount = 0;
  let nonRemovableTodosCount = 0;
  let isEmbeddedAppReady = false;
  let loadedEmbeddedAppCb;

  new Promise((resolve) => {
    loadedEmbeddedAppCb = resolve;
  }).then(() => {
    isEmbeddedAppReady = true;
  });

  onMount(() => {
    const script = document.createElement('script');
    script.onload = loadedEmbeddedAppCb;
    script.src = 'https://ember-todo-test.onrender.com/bundle.js';
    document.head.appendChild(script);
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://ember-todo-test.onrender.com/bundle.css';
    document.head.appendChild(link);
  });

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

{#if isEmbeddedAppReady}
  <div use:bootEmbeddedApp={{ canRemoveTodos: true, onTodosChanged: (todos) => removableTodosCount = todos.length }} id="embedded-app-1">
    App with removable todos ({removableTodosCount})
  </div> 

  <div use:bootEmbeddedApp={{ canRemoveTodos: false, onTodosChanged: (todos) => nonRemovableTodosCount = todos.length }} id="embedded-app-2">
    App without removable todos ({nonRemovableTodosCount})
  </div>
{:else}
  Loading...
{/if}


