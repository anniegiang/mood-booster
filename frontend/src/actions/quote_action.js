import * as APIUtil from "../util/quote.util";

export const RECEIVE_QUOTE = "RECEIVE_QUOTE";

//REGULAR ACTION CREATOR
const receiveQuote = quote => {
    return {
        type: RECEIVE_QUOTE,
        quote
    }
}

//THUNK ACTION CREATOR
export const fetchQuote = id => dispatch => {
    // debugger
    return APIUtil.getQuote(id).then(quote => dispatch(receiveQuote(quote)))
}