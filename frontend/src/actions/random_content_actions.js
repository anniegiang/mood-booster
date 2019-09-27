import * as APIUtil from "../util/random_content_api_util";
export const RECEIVE_RANDOM_CONTENT = "RECEIVE_RANDOM_CONTENT";

const receiveRandomContent = randomContent => {
  return {
    type: RECEIVE_RANDOM_CONTENT,
    randomContent
  };
};

// thunk
export const fetchRandomContent = () => dispatch => {
  return APIUtil.fetchRandomContent().then(randomContent =>
    dispatch(receiveRandomContent(randomContent))
  );
};
