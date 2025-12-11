```html
<script src="https://ember-todo-test.onrender.com/bundle.js"></script>

<link href="https://ember-todo-test.onrender.com/bundle.css" rel="stylesheet" />
```

```js
// usage
const app = new window.MyEmbeddedApp(htmlElement, options);
await app.start();
```


NOTE:

Let me highlight the most painful bits of that experiment.

- There was no easy way to create an alternative build that's not a standalone SPA.
Meaning that an Ember app is generally expected to be the only app on the page and it's only "entrypoint" is an index.html.
That required us to essentially take the webpage targeted build and process it for something that's a bit easier to consume by a potential user. We had a custom Webpack plugin that concatenates all of the JavaScript into a single js bundle and makes sure that `vendor.js` is at the top and is processed before the App boot.
Because `vendor.js` is what provides an `AMD` loader for the page.

At that point it's also worth mentioning that there can only be one definition of the `AMD` loader in a single web page context. If the app were to be loaded twice or used in a page that already has it, it'd crash. Now, the loader can potentially be scoped to a certain namespace, but at the time this wasn't something we needed to solve and I'm not aware of a nice config that could handle that gracefully.

- Creating a single css bundle is best done using an external css solution to the one provided by `ember-cli`. It's what most projects did already at the time anyway, but still is a required step. 

The full code is available in [BobrImperator/my-blogposts](https://github.com/BobrImperator/my-blogposts)
