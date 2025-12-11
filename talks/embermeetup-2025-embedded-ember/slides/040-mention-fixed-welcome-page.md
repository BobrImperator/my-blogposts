```diff
import { setComponentTemplate } from '@ember/component';
+ import constructionUrl from './construction.png';

- const constructionUrl = new URL('./construction.png', import.meta.url).href;

class WelcomePageComponent extends Component {
  static { setComponentTemplate(...) }
}

```

<img src="/snapshot/fixed_welcome_page_construction.png" />

Note:

Looking at a compiled welcome-page.
This directly edits a compiled welcome-page dist due to the fact that when the exact change is forked and changed _before_ building with rollup, rollup will throw an error.

I don't know at this time how to fix it properly in the library source code.
