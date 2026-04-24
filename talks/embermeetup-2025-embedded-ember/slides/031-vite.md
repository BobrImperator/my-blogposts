```gjs
import tomster from '../../assets/bielsko-tomster.webp';
<template>
  <img width="500px" src={{tomster}} />
  <WelcomePage />
</template>

```


<img src="/snapshot/new_tomster_base64.png" />

Note:

We add a new image 

We'll look into optimizing the size. Library mode by default inlines assets, so the imported images are encoded as base64 strings.

Additionally you might notice that the consumer size is smaller - that's because Library mode doesn't minify code and leaves it up to the consumers instead.
