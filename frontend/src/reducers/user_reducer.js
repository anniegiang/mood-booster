import { RECEIVE_USER } from "../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      return action.type.data;

    
    default:
      return state;
  }
};

export default userReducer;
