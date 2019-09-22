import { combineReducers } from "redux";
import session from "./session_reducer";

const entitiesReducer = combineReducers({
  session
});

export default entitiesReducer;
