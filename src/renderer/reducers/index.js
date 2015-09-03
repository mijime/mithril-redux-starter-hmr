import { combineReducers } from 'redux';

import { ADD_ITEM } from '../constants/item';

function items (state=0, action={}) {
  switch (action.type) {
  case ADD_ITEM:
    return state + action.count;

  default:
    return state;
  }
}

const reducers = combineReducers({ items });

export default reducers;
