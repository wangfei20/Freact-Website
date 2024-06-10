## Introduction
FreactJs, or Freact, is a lightweight version of React developed by Fiona Wang that maintains almost identical API with React, ensuring a consistent and familiar development experience for developers.

We recommend React or other similar framework for heavy ecommerce or enterprise applications. Freact is a lightweight alternative bringing a fast developer experience to the modern React era. Yes, let’s make React development fast again!

> Freact is in rapid development and some features are currently missing. Please try it on non-production projects and report any issues you may encounter. Expect that there will be some breaking changes on the road towards a stable v1 release. Contributors are welcome.

## Getting started
Start a new Freact project with the create command for your preferred package manager. It will scaffold a new project with our default Freact starter.

``` javascript
npm create freact@latest
```

**Node.js version requirement:** `^20.8.0 or ^18.17.0`


## Rendering
While there’s a little bit of a learning curve to modern React rendering, it introduces powerful new patterns of full-stack composability that are only possible with the advent of server components.

So please don’t be intimidated by the 'use client' directive! Once you get the hang of it, you’ll appreciate how awesome it is to flexibly move server-client boundaries with a single line of code as your full-stack React codebase evolves over time. It’s way simpler than maintaining separate codebases for your backend and frontend.

And please don’t fret about client components! Even if you only lightly optimize towards server components, your client bundle size will be smaller than traditional React frameworks, which are always 100% client components.

NOTE
Future versions of Freact may provide additional opt-in APIs to abstract some of the complexity away for an improved developer experience.

SERVER COMPONENTS
Server components can be made async and can securely perform server-side logic and data fetching. Feel free to access the local file-system and import heavy dependencies since they aren’t included in the client bundle. They have no state, interactivity, or access to browser APIs since they run exclusively on the server.

``` javascript
// server component
import db from 'some-db';

import { Gallery } from '../components/gallery';

export const Store = async () => {
  const products = await db.query('SELECT * FROM products');

  return <Gallery products={products} />;
};
```

CLIENT COMPONENTS
A 'use client' directive placed at the top of a file will create a server-client boundary when imported into a server component. All components imported below the boundary will be hydrated to run in the browser as well. They can use all traditional React features such as state, effects, and event handlers.

``` javascript
// client component
'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
};

```

SHARED COMPONENTS
Simple React components that meet all of the rules of both server and client components can be imported into either server or client components without affecting the server-client boundary.