import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Photos } from './photos';
import { Menus } from './menus';

import { InitialFeedback } from '../constants/forms';

export const reducers = combineReducers({
  dishes: Dishes,
  promotions: Promotions,
  leaders: Leaders,
  photos: Photos,
  menus: Menus,
  ...createForms({
    feedback: InitialFeedback,
  }),
});
