import { combineReducers } from "redux";
import { createForms } from "react-redux-form";

import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Photos } from "./photos";

import { InitialFeedback } from "../constants/forms";

export const reducers = combineReducers({
  dishes: Dishes,
  comments: Comments,
  promotions: Promotions,
  leaders: Leaders,
  photos: Photos,
  ...createForms({
    feedback: InitialFeedback,
  }),
});
