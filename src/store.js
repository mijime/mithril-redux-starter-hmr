import * as reducers from './reducers';
import {configureUDStore, applyUDMiddleware} from './utils/redux-ud';

export function configureStore (init) {
  const middleware = applyUDMiddleware();
  return configureUDStore({middleware, reducers, init});
}
