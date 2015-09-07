import m from 'mithril';
import {Provider} from '../utils/mithril-redux';
import App from './app'

class Root {
  view (controller, props) {
    const {store} = props;
    return (
        <Provider store={store}>
          {App}
        </Provider>
        );
  }
}

const RootInstance = new Root;

export default RootInstance;
