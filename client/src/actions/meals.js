import * as ActionTypes from '../constants/actionTypes';
/*
import * as api from '../api/index.js';

export const fetchDishes = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.DISHES_LOADING,
    });
    const { data } = await api.fetchMenus();

    dispatch({
      type: ActionTypes.ADD_DISHES,
      payload: data,
    });

    dispatch({ type: ActionTypes.END_LOADING });
  } catch (error) {
    dispatch({
      type: ActionTypes.DISHES_FAILED,
      payload: error,
    });

    console.log(error);
  }
};
*/

import { DISHES } from '../shared/dishes';

export const fetchDishes = () => (dispatch) => {
  dispatch({
    type: ActionTypes.START_LOADING_DISHES,
  });

  setTimeout(() => {
    dispatch({
      type: ActionTypes.ADD_DISHES,
      payload: DISHES,
    });
    dispatch({ type: ActionTypes.END_LOADING_DISHES });
  }, 300);
};
