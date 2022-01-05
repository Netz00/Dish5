import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import { Dishes } from './dishes';
import { Photos } from './photos';
import { Menus } from './menus';
import { Auth } from './auth';

import { InitialFeedback } from '../constants/forms';

export const reducers = combineReducers({
  dishes: Dishes,
  photos: Photos,
  menus: Menus,
  auth: Auth,
  ...createForms({
    feedback: InitialFeedback,
  }),
});
