import { RECEIVE_RANDOM_CONTENT } from "../actions/random_content_actions";

const _defaultState = {
  content: {},
  expiresIn: new Date().getDate() + 1 // 24 hours in ms
};
const randomContentReducer = (state = _defaultState, action) => {
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
