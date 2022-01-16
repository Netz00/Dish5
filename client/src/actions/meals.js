import * as ActionTypes from '../constants/actionTypes';

import * as api from '../api/index.js';

export const fetchDishes = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.START_LOADING_DISHES,
    });
    const { data } = await api.fetchAllMeals();

    dispatch({
      type: ActionTypes.ADD_DISHES,
      payload: data,
    });

    dispatch({ type: ActionTypes.END_LOADING_DISHES });
  } catch (error) {
    dispatch({
      type: ActionTypes.DISHES_FAILED,
      payload: error,
    });

    console.log(error);
  }
};

export const deleteMeal = (id) => async (dispatch) => {
  try {
    await api.deleteMeal(id);

    dispatch({ type: ActionTypes.DELETE_MEAL, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const createMeal = (meal) => async (dispatch) => {
  try {
    const { data } = await api.createMeal(meal);

    dispatch({ type: ActionTypes.CREATE_MEAL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
/*

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

export const createMeal = (meal) => async (dispatch) => {
  try {
    meal.menu_id = parseInt(meal.menu_id);
    dispatch({ type: ActionTypes.CREATE_MEAL, payload: meal });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMeal = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.DELETE_MEAL, payload: id });
  } catch (error) {
    console.log(error);
  }
};
*/