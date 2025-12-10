# We're on Vite now

<video style="height: calc(100% - 150px); width: calc(100% - 150px);" controls>
  <source src="/snapshot/the_app_1.mp4">
</video>
https://mainmatter.com/blog/2024/03/27/embeddable-ember-apps/

```js
<!-- Loading the app -->
<script src="https://ember-todo-test.onrender.com/bundle.js"></script>
```

```js
// Usage
const app = new window.MyEmbeddedApp(htmlElement, options);
await app.start();
```

Note:

@TODO reorder this

I've previously explored the topic a bit in late 2023 and released the findings as a blog post in March 2024.
During that time work to enable full ESM and Vite support was coming along.
Statically analyzable Ember apps meant better size optimization, build flexibility and development experience.

Coincidentally same month next year our team thanks to the Ember Initiative released an `ember-vite-codemod` to assist users to move towards Vite.
Once users are on Vite, new or at least streamlined capabilities unlock. Ember apps built with Vite no longer rely on AMD loaders - this is what this post is about; revisting the topic of embeddable Ember apps with Vite.

-- Ember 6.8 brought a default Vite blueprint, but in Ember 4.0 it was already possible.
-- Embroider 3 and webpack were generating modules and module resolution was still AMD.
