import * as ActionTypes from '../constants/actionTypes';

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: true, errMess: null, dishes: action.payload}

        case ActionTypes.END_LOADING_DISHES:
            return {...state, isLoading: false, errMess: null}

        case ActionTypes.START_LOADING_DISHES:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []}

        default: 
            return state;
    }
}