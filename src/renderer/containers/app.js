import m from 'mithril';
import {bindActionCreators} from 'redux';

import * as ItemActions from '../actions/item';

class App {
  controller(props, children) {
    console.debug('App:controller', props, children);
  }

  view(controller, props, children) {
    console.debug('App:view', props, children);

    const {dispatch, items} = props;
    const actions = bindActionCreators(ItemActions, dispatch);

    return (
        <div>
          <h1> {items} clicked </h1>
          <button onclick={actions.addItem}> click me </button>
        </div>
        );
  }
}

export default new App();
