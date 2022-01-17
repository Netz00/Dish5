import * as ActionTypes from '../constants/actionTypes';

import { GROCERIES } from '../shared/groceries';

export const fetchGroceries = () => (dispatch) => {
  dispatch({
    type: ActionTypes.START_LOADING_GROCERIES,
  });

  setTimeout(() => {
    dispatch({
      type: ActionTypes.ADD_GROCERIES,
      payload: GROCERIES,
    });
  }, 300);
};
