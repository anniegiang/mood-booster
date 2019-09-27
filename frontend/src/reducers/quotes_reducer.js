import { RECEIVE_QUOTE, RECEIVE_FILTERED_QUOTES } from '../actions/quote_actions';

const QuotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_QUOTE:
            newState = Object.assign({}, state, { [action.quote.data._id]: action.quote.data })
            return newState;
        case RECEIVE_FILTERED_QUOTES:
            return action.quotes
        default:
            return state
    }
}

export default QuotesReducer;