import m from 'mithril';
import { bindActionCreators  } from 'redux';

import { connect  } from '../lib/mithril-redux';
import * as ItemActions from '../actions/item';

class App {
  controller (props) {
    // console.debug('App:controller', props, children);
    const { dispatch } = props;
    const actions = bindActionCreators(ItemActions, dispatch);

    this.actions = actions;
  }

  view (controller, props) {
    // console.debug('App:view', props, children);

    const { actions } = controller;
    const { items } = props;

    return (
        <div>
          <h1> { items } clicked </h1>
          <button className='pure-button' onclick={ actions.addItem }>
            click me
          </button>
        </div>
        );
  }
}

const instance = new App();

export default connect((state) => state)(instance);
