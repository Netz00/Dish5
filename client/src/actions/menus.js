import * as ActionTypes from '../constants/actionTypes';


import * as api from '../api/index.js';

export const fetchMenus = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.START_LOADING_MENUS,
    });
    const { data } = await api.fetchMenus();

    dispatch({
      type: ActionTypes.ADD_MENUS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.MENUS_FAILED,
      payload: error,
    });

    console.log(error);
  }
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    await api.deleteMenu(id);

    dispatch({ type: ActionTypes.DELETE_MENU, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const createMenu = (menu) => async (dispatch) => {
  try {
    const { data } = await api.createMenu(menu);

    dispatch({ type: ActionTypes.CREATE_MENU, payload: data });
  } catch (error) {
    console.log(error);
  }
};
/*

import { MENUS } from '../shared/menus';

export const fetchMenus = () => (dispatch) => {
  dispatch({
    type: ActionTypes.START_LOADING_MENUS,
  });

  setTimeout(() => {
    dispatch({
      type: ActionTypes.ADD_MENUS,
      payload: MENUS,
    });
  }, 300);
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.DELETE_MENU, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const createMenu = (menu) => async (dispatch) => {
  try {
    menu.id = (Math.random() * (100000 - 100 + 1)) << 0;
    dispatch({ type: ActionTypes.CREATE_MENU, payload: menu });
  } catch (error) {
    console.log(error);
  }
};
*/