import m from 'mithril';

import App from './app';
import {Provider} from '../lib/mithril-redux';

class Root {
  controller(props, children) {
    // console.debug('Root:controller', props, children);

    const {store} = props;
    this.store = store;
  }

  view(controller, props, children) {
    // console.debug('Root:view', props, children);

    const {store} = controller;
    return (
        <Provider store={store}>{App}</Provider>
        );
  }
}

const instance = new Root();

export default instance;
