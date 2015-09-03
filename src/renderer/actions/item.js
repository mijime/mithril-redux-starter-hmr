import m from 'mithril';
import { ADD_ITEM } from '../constants/item';

export function addItem () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ADD_ITEM,
        count: 1,
      });
    }, 1000 * 0.5);
  };
}
