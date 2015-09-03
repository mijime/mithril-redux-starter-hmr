import m from 'mithril';
import { defn, defonce  } from 'ud';

import Root from './containers/root';
import configureStore from './store';

function main (store) {
  return m.mount(document.body, (<Root store={ store } />));
}

const store = defonce(module, () => configureStore());
defn(module, main)(store);
