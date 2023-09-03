import * as api from '../../../api'
import { BookActionTypes } from './types'
import store from "../../store";
// action creators

// get quote
export const bookARide = () => async (dispatch) => {
    const state = store.getState();
    const booking = state.PreBookingReducer;
    try {
        const { data } = await api.bookARide(booking)
        dispatch({ type: BookActionTypes.BOOKING_SUCCESS , payload: data.status })
    } catch (error) {
        dispatch({ type: BookActionTypes.BOOKING_ERROR , payload: error.response.data.status})
    }
}

