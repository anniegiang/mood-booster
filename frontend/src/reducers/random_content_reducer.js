import { RECEIVE_RANDOM_CONTENT } from "../actions/random_content_actions";

const _defaultState = {
  videos: {},
  photos: {},
  quote: {},
  expiresIn: Date.now() + 8.64e7 // 24 hours in ms
};
const randomContentReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANDOM_CONTENT:
      return action.randomContent;
    default:
      return state;
  }
};

export default randomContentReducer;
