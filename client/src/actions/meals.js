import {
  DISHES_LOADING,
  END_LOADING,
  ADD_DISHES,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getMeals = () => async (dispatch) => {
  console.log("dsaasd");
  try {
    dispatch({
      type: DISHES_LOADING,
    });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchAllMeals();

    console.log(data);
    dispatch({
      type: ADD_DISHES,
      payload: { dishes: data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
