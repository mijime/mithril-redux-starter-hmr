import m from 'mithril';
import {defn, defonce} from 'ud';
import Root from './containers/root';
import configureStore from './store';

const store = defonce(module, function() {
  return configureStore();
});

const main = defn(module, function(store) {
  m.mount(document.body, <Root {...store} />);
});

main(store);
