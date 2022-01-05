import * as ActionTypes from '../constants/actionTypes';

/*
import * as api from '../api/index.js';

export const fetchPhotos = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.MENUS_LOADING,
    });
    const { data } = await api.fetchMenus();

    dispatch({
      type: ActionTypes.ADD_MENUS,
      payload: data,
    });

    dispatch({ type: ActionTypes.END_LOADING });
  } catch (error) {
    dispatch({
      type: ActionTypes.MENUS_FAILED,
      payload: error,
    });

    console.log(error);
  }
};
*/

import { PHOTOS } from '../shared/photos';

export const fetchPhotos = () => (dispatch) => {
  dispatch({
    type: ActionTypes.START_LOADING_PHOTOS,
  });

  setTimeout(() => {
    dispatch({
      type: ActionTypes.ADD_PHOTOS,
      payload: PHOTOS,
    });
  }, 300);
};
