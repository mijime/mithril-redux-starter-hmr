import m from 'mithril';

import Root from './containers/root';
import {configureStore} from './store';
import {initModule, defn} from './utils/redux-ud';

initModule(module);

const init = {};
const store = configureStore(init);

defn(() => {
  return m.mount(document.body, (<Root store={store} />));
})();
