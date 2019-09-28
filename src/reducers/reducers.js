import { combineReducers } from "redux";

import dishReducer from "./dishreducer/";

const rootReducer = combineReducers({
  dishReducer: dishReducer
});

export default rootReducer;
