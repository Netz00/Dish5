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

    case ActionTypes.DELETE_MENU:
      return { ...state, isLoading: false, menus: state.menus.filter((menu) => menu.id !== action.payload) };

    case ActionTypes.CREATE_MENU:
      return { ...state, isLoading: false, menus: [...state.menus, action.payload] };

    default:
      return state;
  }
};
