import * as ActionTypes from '../constants/actionTypes';

export const Photos = (state = {
  isLoading: true,
  errMess: null,
  photos: [],
}, action) => {
  switch (action.type) {

    case ActionTypes.ADD_PHOTOS:
    return { ...state, isLoading: false, errMess: null, photos: action.payload };

    case ActionTypes.START_LOADING_PHOTOS:
      return {...state, isLoading: true, errMess: null, photos: []}

    case ActionTypes.PHOTOS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, photos: []}

    default:
      return state;
  }
};
