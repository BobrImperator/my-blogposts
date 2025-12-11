# We're on Vite

```gts

// /ember-welcome-page/images/construction.png
const constructionUrl =
    new URL('./construction.png', import.meta.url).href;

<div class="tomster">
  <img src={{constructionUrl}} alt="Under construction" />
</div>
```

```bash
embedded-dist/ember-welcome-page/images/construction.png     91.11 kB
```

Note:

The above works just fine for a web app because the path is relative to the dist which normally is able to serve such paths.
However when an ember app is pulled in as a library then there's no such guarantee and also what's happening is that `ember-welcome-page` is pre-built when the ember library builds and at that point the path is already created. And the final consumer of the library doesn't realize that path needs to be converted.

...is what I would say but a couple days ago v8 of `ember-welcome-page` was released and it actually works in react now.
