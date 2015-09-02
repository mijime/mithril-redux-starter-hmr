import m from 'mithril';
import {defn} from 'ud';
import Root from './containers/root';

const main = defn(module, function() {
  m.mount(document.body, <Root />);
});

main();
