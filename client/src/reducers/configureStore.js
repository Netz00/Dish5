import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Photos } from "./photos";

import { InitialFeedback } from "../constants/forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      photos: Photos,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};