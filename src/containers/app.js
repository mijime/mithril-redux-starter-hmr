import m from 'mithril';
import {bindActionCreators} from 'redux';
import {connect} from '../utils/mithril-redux';
import {addCount} from '../actions';

class App {
  controller (props) {
    const {dispatch} = props;
    this.actions = bindActionCreators({addCount}, dispatch);
  }

  view (controller, props) {
    const {actions} = controller;
    const {count} = props;

    return (
        <div>
          <h1> {count} clicked </h1>
          <button onclick={actions.addCount}>
            click me
          </button>
        </div>
        );
  }
}

const AppInstance = connect((state) => state)(new App);

export default AppInstance;
