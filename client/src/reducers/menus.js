import * as ActionTypes from '../constants/actionTypes';

export const Menus = ( state = {
    isLoading: true,
    errMess: null,
    menus: [],
  }, action ) => {
  switch (action.type) {

    case ActionTypes.ADD_MENUS:
      return { ...state, isLoading: false, errMess: null, menus: action.payload };

    case ActionTypes.START_LOADING_MENUS:
      return {...state, isLoading: true, errMess: null, menus: []}

    case ActionTypes.MENUS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, menus: []}

    default:
      return state;
  }
};
