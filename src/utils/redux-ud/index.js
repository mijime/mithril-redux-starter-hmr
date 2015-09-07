import * as ud from 'ud';
import {createStore, applyMiddleware, combineReducers} from 'redux';

let module;

export function initModule (m) {
  module = m;
}

export function defn (...args) {
  return ud.defn.apply(ud, [module, ...args]);
}

export function defonce (...args) {
  return ud.defonce.apply(ud, [module, ...args]);
}

export function configureUDStore ({middleware, reducers, state}) {
  // console.debug('configureUDStore', middleware, reducers, state);
  const createStoreFromMiddleware = defn(middleware, 'createStoreFromMiddleware')(createStore);
  const udReducers = combineUDReducers(reducers);
  const store = createStoreFromMiddleware(udReducers, state);
  return defonce(() => store);
}

export function applyUDMiddleware (...middlewares) {
  // console.debug('applyUDMiddleware', middlewares);
  const udMiddlwares = middlewares.map((m, i) => defn(m, `applyUDMiddleware:${i}`));
  return applyMiddleware.apply(this, udMiddlwares);
}

function combineUDReducers (reducers) {
  // console.debug('combineUDReducers', reducers);
  let udReducers = {};
  for (const name in reducers)
    udReducers[name] = defn(reducers[name], `combineUDReducers:${name}`);

  return combineReducers(udReducers);
}
