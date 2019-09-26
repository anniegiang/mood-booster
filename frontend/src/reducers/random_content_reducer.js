import { RECEIVE_RANDOM_CONTENT } from "../actions/random_content.actions";

const randomContentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANDOM_CONTENT:
      return action.randomContent;
    default:
      return state;
  }
};
