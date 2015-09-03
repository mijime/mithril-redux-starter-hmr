import m from 'mithril';
import {bindActionCreators} from 'redux';

import {connect} from '../lib/mithril-redux';
import * as ItemActions from '../actions/item';

class App {
  controller(props, children) {
    // console.debug('App:controller', props, children);
    const {dispatch} = props;
    const actions = bindActionCreators(ItemActions, dispatch);

    this.dispatch = dispatch;
    this.actions = actions;
  }

  view(controller, props, children) {
    // console.debug('App:view', props, children);

    const {dispatch, actions} = controller;
    const {items} = props;

    return (
        <div>
          <h1> {items} clicked </h1>
          <button className='pure-button' onclick={actions.addItem}> click me </button>
        </div>
        );
  }
}

const instance = new App();

export default connect(state => state)(instance);
