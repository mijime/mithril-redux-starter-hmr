import {ADD_ITEM} from '../constants/item';

export function addItem(e) {
  // consolue.debug('addItem', e);
  return {
    type: ADD_ITEM,
    count: 1,
  };
}
