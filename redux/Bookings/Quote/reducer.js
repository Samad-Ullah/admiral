import { QuoteActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    quotes:null,
    error: null
}

const QuoteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QuoteActionTypes.GET_QUOTE:
            return { ...state, loading: false, quotes: action.payload }
        case QuoteActionTypes.GET_QUOTE_ERROR:
            return { ...state, loading: false, error: action.payload }
      
        default:
            return state
    }
}
export default QuoteReducer;
