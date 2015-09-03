# mithril-redux-starter-hmr

# using modules

* [mithril](https://github.com/lhorie/mithril.js)
* [redux](https://github.com/rackt/redux)
* [browserify-hmr](https://npmjs.com/package/browserify-hmr)
* [browserify](http://browserify.org)/[watchify](https://npmjs.com/package/watchify)
* [ud](https://github.com/AgentME/ud)

# quick start

```
$ npm install
$ npm run watch
```

# commands

* `npm run build` - build js for production
* `npm run watch` - automatically build js on file changes for development

# starter code

``` js
import m from 'mithril';
import { defn, defonce } from 'ud';

import Root from './containers/root';
import configureStore from './store';

function main (store) {
  return m.mount(document.body, (<Root store={ store } />));
}

const store = defonce(module, () => configureStore());
defn(module, main)(store);
```
