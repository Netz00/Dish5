import * as ActionTypes from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: ActionTypes.AUTH, data });

    router.go('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: ActionTypes.AUTH, data });

    router.go('/');
  } catch (error) {
    console.log(error);
  }
};
/*

import { SIGNIN } from '../shared/signin';
import { SIGNUP } from '../shared/signup';

export const signin = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.AUTH, SIGNIN });

    router.go('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.AUTH, SIGNUP });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
*/