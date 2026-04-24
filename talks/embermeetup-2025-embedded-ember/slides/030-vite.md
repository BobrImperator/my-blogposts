# Optimizing size

```bash [6] 
# Ember library
embedded-dist/@embroider/virtual/vendor.js        0.32 kB
embedded-dist/@embroider/virtual/vendor.css       0.00 kB │ gzip:   0.02 kB
embedded-dist/@embroider/virtual/app.css          0.12 kB │ gzip:   0.12 kB
embedded-dist/embermeetup2025-ember-impl.css      1.87 kB │ gzip:   0.61 kB
embedded-dist/embedded.js                     2,061.47 kB │ gzip: 560.72 kB
```

```bash [5]
# React consumer
dist/index.html                   0.49 kB │ gzip:   0.32 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:   2.05 kB
dist/assets/index-6lFyMxhS.css    3.25 kB │ gzip:   1.16 kB
dist/assets/index-B-6rz9cu.js   834.76 kB │ gzip: 320.44 kB
```

Note:

We'll look into optimizing the size. Library mode by default inlines assets, so the imported images are encoded as base64 strings.

Additionally you might notice that the consumer size is smaller - that's because Library mode doesn't minify code and leaves it up to the consumers instead.
