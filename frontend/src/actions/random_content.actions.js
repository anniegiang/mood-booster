import { fetchRandomContent } from "./random_content_api_util";
export RECEIVE_RANDOM_CONTENT = "RECEIVE_RANDOM_CONTENT";

const receiveRandomContent = randomContent => {
  return {
    type: RECEIVE_RANDOM_CONTENT,
    randomContent
  }
}

// thunk
export default fetchRandomContent = () => dispatch => {
  return APIUtil.fetchRandomContent()
    .then(randomContent => dispatch(receiveRandomContent(randomContent)))
};