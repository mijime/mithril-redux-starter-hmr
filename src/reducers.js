import {ADD_COUNT, ADD_COUNT_K} from './constants';

export function count (state=0, action={}) {
  switch (action.type) {
     case ADD_COUNT:
      return state + action.inc * ADD_COUNT_K;

    default:
      return state;
  }
}
