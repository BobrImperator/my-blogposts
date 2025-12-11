# We're on Vite

```diff x-small-font
// node_modules/ember-welcome-page/dist/components/ember-welcome-page.js
import { setComponentTemplate } from '@ember/component';
+ import constructionUrl from './construction.png';

- const constructionUrl = new URL('./construction.png', import.meta.url).href;

class WelcomePageComponent extends Component {
  static { setComponentTemplate(...) }
}


```

<img src="/snapshot/fixed_welcome_page_construction.png" />


Note:

I'll jump ahead slightly but an interesting thing I noticed when checking out different build options and setups is:
The `construction.png` import can't be used directly in an addon built with rollup, even though it should be possible. It fails due to lacking plugins but even though those are added, it'd still fail: indicating there's something worth investigating in how Ember addons are built.

Once an already built addon dist is patched to use an import directly, Vite is able to handle that import correctly in the consuming app.

