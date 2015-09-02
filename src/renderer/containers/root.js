import m from 'mithril';

import App from './app';
import store from '../store';

class Root {
  controller(props, children) {
    // consolue.debug('Root:controller', props, children);
  }

  view(controller, props, children) {
    // consolue.debug('Root:view', props, children);

    const state = store.getState();
    const dispatch = store.dispatch;

    return (<App dispatch={dispatch} {...state} />);
  }
}

export default new Root();
