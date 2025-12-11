
```json [7, 10-12]
{
  "name": "embermeetup2025-ember-impl",
  "version": "0.0.0",
  "private": true,
  "repository": "",
  "license": "MIT",
  "exports": {
    "./tests/*": "./tests/*",
    "./*": "./app/*",
    "./embedded": "./embedded-dist/embedded.js"
  },
  "files": ["embedded-dist"]
}
```

Note:

Also let's remember to specify proper package exports and files.
