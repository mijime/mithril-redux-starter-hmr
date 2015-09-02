import m from 'mithril';

import App from './app';
import configureStore from '../store';

class Root {
  controller(props, children) {
    console.debug('Root:controller', props, children);
  }

  view(controller, props, children) {
    console.debug('Root:view', props, children);

    const state = props.getState();
    const dispatch = props.dispatch;

    return (<App dispatch={dispatch} {...state} />);
  }
}

export default new Root();
