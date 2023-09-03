import * as api from '../../../api'
import { QuoteActionTypes } from './types'

// action creators

// get quote
export const getQuoteHourly = (quote, history) => async (dispatch) => {
    try {
        const { data } = await api.getQuoteHourly(quote)
        dispatch({ type: QuoteActionTypes.GET_QUOTE, payload: data })
        // history.push("/confirm")
    } catch (error) {
        dispatch({ type: QuoteActionTypes.GET_QUOTE_ERROR, payload: error })
    }
}

export const getQuoteCityToCity = (quote, history) => async (dispatch) => {
    try {
        const { data } = await api.getQuoteCityToCity(quote)
        dispatch({ type: QuoteActionTypes.GET_QUOTE, payload: data })
        // history.push("/confirm")
    } catch (error) {
        dispatch({ type: QuoteActionTypes.GET_QUOTE_ERROR, payload: error })
    }
}

export const getQuoteAirportTransfer = (quote, history) => async (dispatch) => {
    try {
        const { data } = await api.getQuoteAirportTransfer(quote)
        dispatch({ type: QuoteActionTypes.GET_QUOTE, payload: data })
        // history.push("/confirm")
    } catch (error) {
        dispatch({ type: QuoteActionTypes.GET_QUOTE_ERROR, payload: error })
    }
}
