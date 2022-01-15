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

        case ActionTypes.DELETE_MEAL:
            return { ...state, isLoading: false, dishes: state.dishes.filter((menu) => menu.id !== action.payload) };

        case ActionTypes.CREATE_MEAL:
            return { ...state, isLoading: false, dishes: [...state.dishes, action.payload] };

        default: 
            return state;
    }
}