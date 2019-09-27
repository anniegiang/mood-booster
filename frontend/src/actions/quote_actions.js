import * as APIUtil from "../util/quote.util";

export const RECEIVE_QUOTE = "RECEIVE_QUOTE";
export const RECEIVE_FILTERED_QUOTES = "RECEIVE_FILTERED_QUOTES"

//REGULAR ACTION CREATOR
const receiveQuote = quote => {
    return {
        type: RECEIVE_QUOTE,
        quote
    }
}

const receiveQuotes = quotes => {
    return {
        type: RECEIVE_FILTERED_QUOTES,
        quotes
    }
}

//THUNK ACTION CREATOR
export const fetchQuote = id => dispatch => {
    return APIUtil.getQuote(id).then(quote => dispatch(receiveQuote(quote)))
}

export const fetchQuotes = query => dispatch => {
    return APIUtil.getQuotes(query).then(quotes => dispatch(receiveQuotes(quotes)))
}