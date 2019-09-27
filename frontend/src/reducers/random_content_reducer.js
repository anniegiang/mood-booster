import { RECEIVE_RANDOM_CONTENT } from "../actions/random_content_actions";

const randomContentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RANDOM_CONTENT:
      newState.content = action.randomContent.data;
      return newState;
    default:
      return state;
  }
};

export default randomContentReducer;
