- Don't use browser extensions
- Use production builds `ember serve -e=production`
- A quick way to create a clean sandbox is to use incognito

Note:
Browser extensions run in the same window context they'll create unnecessary noise.
`ember-inspector` and the like might even hold references to your components.

Regular development or testing builds will include debug code.
Debug code again will create noise but might also cause the leaks themselves, this is why you should use the production build and avoid development builds.

At this point it's worth to mention that you should always confirm leaks against production environment.
