# We're on Vite

```js [2, 9-14, 18]

import EmbeddedEmber from "embermeetup2025-ember-impl/embedded";
import { useRef } from "react";

function App() {
  const initialized = useRef(false);
  const [count, setCount] = useState(0);

  const runEmberApp = (node) => {
    if (node && !initialized.current) {
      new EmbeddedEmber(node).start();
      initialized.current = true;
    }
  };
  return (
    <>
      <!-- The rest is cut for readability -->
      <div ember-placeholder="true" ref={runEmberApp}></div>
    </>
  );
}
```

Note:

No more compromises! We're a library now so it can be installed and initialized. How it's loaded, when and initialized is up to the users now!

