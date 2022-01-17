import * as ActionTypes from '../constants/actionTypes';

export const Reservations = ( state = {
    isLoading: true,
    errMess: null,
    reservations: [],
  }, action ) => {
  switch (action.type) {

    case ActionTypes.ADD_RESERVATIONS:
      return { ...state, isLoading: false, errMess: null, reservations: action.payload };

    case ActionTypes.START_LOADING_RESERVATIONS:
      return {...state, isLoading: true, errMess: null, reservations: []}

    case ActionTypes.RESERVATIONS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, reservations: []}

    default:
      return state;
  }
};
