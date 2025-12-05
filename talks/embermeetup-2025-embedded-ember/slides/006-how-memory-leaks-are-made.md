# The before - webpack and broccoli (pre-vite)


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

I've previously explored the topic a bit in late 2023 and released the findings as a blog post in March 2024.
During that time work to enable full ESM and Vite support was coming along.
Statically analyzable Ember apps meant better size optimization, build flexibility and developmente experience.

Coincidentally same month next year our team thanks to the Ember Initiative released an `ember-vite-codemod` to assist users to move towards Vite.
A few more months later, Ember apps built with Vite no longer rely on AMD loaders - this is what this post is about; revisting the topic of embeddable Ember apps with Vite.

Ember 6.8 brought a default Vite blueprint, but in Ember 4.0 it was already possible.
Embroider 3 and webpack were generating modules and module resolution was still AMD.

The moment Vite was introduced, AMD was no longer. AMD has become opt-in and not the default.
