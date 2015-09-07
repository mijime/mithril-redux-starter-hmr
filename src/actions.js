import {ADD_COUNT, ADD_COUNT_N} from './constants';

export function addCount (e) {
  return {type: ADD_COUNT, inc: ADD_COUNT_N};
}
