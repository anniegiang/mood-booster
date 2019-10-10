import * as APIUtil from "../util/comments.util";
import { receivePhoto } from "./photo_actions";
import { receiveVideo } from "./video_actions";
import { receiveQuote } from "./quote_actions";

// thunk
export const createComment = data => dispatch => {
  if (data.type === "photo") {
    return APIUtil.createComment(data).then(photo =>
      dispatch(receivePhoto(photo))
    );
  } else if (data.type === "video") {
    return APIUtil.createComment(data).then(photo =>
      dispatch(receiveVideo(photo))
    );
  } else if (data.type === "quote") {
    return APIUtil.createComment(data).then(photo =>
      dispatch(receiveQuote(photo))
    );
  }
};

export const updateComment = data => dispatch => {
  if (data.type === "photo") {
    return APIUtil.updateComment(data).then(photo =>
      dispatch(receivePhoto(photo))
    );
  } else if (data.type === "video") {
    return APIUtil.updateComment(data).then(photo =>
      dispatch(receiveVideo(photo))
    );
  } else if (data.type === "quote") {
    return APIUtil.updateComment(data).then(photo =>
      dispatch(receiveQuote(photo))
    );
  }
};

export const deleteComment = data => dispatch => {
  if (data.type === "photo") {
    return APIUtil.deleteComment(data).then(photo =>
      dispatch(receivePhoto(photo))
    );
  } else if (data.type === "video") {
    return APIUtil.deleteComment(data).then(photo =>
      dispatch(receiveVideo(photo))
    );
  } else if (data.type === "quote") {
    return APIUtil.deleteComment(data).then(photo =>
      dispatch(receiveQuote(photo))
    );
  }
};
