import m from 'mithril';
import {ADD_ITEM} from '../constants/item';

export function addItem(e) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: ADD_ITEM,
        count: 1,
      });
    }, 1000 * 0.5);
  }
}
