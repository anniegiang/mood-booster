import { RECEIVE_USER } from "../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = Object.assign({}, 
        {handle: action.user.data.handle},
        {photoSave: action.user.data.photoSave},
        {videoSave: action.user.data.videoSave},
        {quoteSave: action.user.data.quoteSave},
        {id: action.user.data._id}
        )
      

      return newState;

    
    default:
      return state;
  }
};

export default userReducer;
