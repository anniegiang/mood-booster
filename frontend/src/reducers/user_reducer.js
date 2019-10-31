import { RECEIVE_USER } from "../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const { handle, photoSave, quoteSave, videoSave, _id } = action.user.data;
      const newState = {
        handle,
        photoSave,
        quoteSave,
        videoSave,
        _id
      };
      return newState;
    default:
      return state;
  }
};

export default userReducer;
