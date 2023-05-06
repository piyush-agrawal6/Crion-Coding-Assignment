import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { movieReducer } from "./movie/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
});
