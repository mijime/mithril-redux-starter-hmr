import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import { redrawMiddleware } from '../lib/mithril-redux';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  redrawMiddleware
)(createStore);

export default function configureStore (initalState) {
  return createStoreWithMiddleware(reducers, initalState);
}
