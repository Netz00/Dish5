import * as ActionTypes from '../constants/actionTypes';

import * as api from '../api/index.js';

export const fetchReservations = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.START_LOADING_RESERVATIONS,
    });
    const { data } = await api.fetchReservations();

    dispatch({
      type: ActionTypes.ADD_RESERVATIONS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.RESERVATIONS_FAILED,
      payload: error,
    });

    console.log(error);
  }
};

export const createReservation = (reservation) => async () => {
  try {
    await api.createReservation(reservation);
  } catch (error) {
    console.log(error);
  }
};
