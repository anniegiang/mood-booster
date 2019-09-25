import { RECEIVE_QUOTE } from '../actions/quote_action';

const QuotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_QUOTE:
            newState = Object.assign({}, state, { [action.quote.data._id]: action.quote.data })
            return newState;
        default:
            return state
    }
}

export default QuotesReducer;