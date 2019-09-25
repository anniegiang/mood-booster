import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import tweets from "./tweets_reducer";
import user from "./user_reducer";
import contentReducer from "./content_reducer";

const rootReducer = combineReducers({
  session,
  tweets,
  errors,
  user,
  content: contentReducer
});

export default rootReducer;
