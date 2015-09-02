import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
    )(createStore);

export default function configureStore(initalState) {
  return createStoreWithMiddleware(reducers, initalState);
}
