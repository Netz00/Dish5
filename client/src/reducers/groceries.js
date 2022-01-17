import * as ActionTypes from '../constants/actionTypes';

export const Groceries = (
  state = {
    isLoading: true,
    errMess: null,
    photos: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_GROCERIES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        groceries: action.payload,
      };

    case ActionTypes.START_LOADING_GROCERIES:
      return { ...state, isLoading: true, errMess: null, groceries: [] };

    case ActionTypes.GROCERIES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        groceries: [],
      };

    default:
      return state;
  }
};
