import { BookActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    success:null,
    error: null
}

const BookingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookActionTypes.BOOKING_SUCCESS:
            return { ...state, loading: false, success: action.payload }
        case BookActionTypes.BOOKING_ERROR:
            return { ...state, loading: false, error: action.payload }
      
        default:
            return state
    }
}
export default BookingReducer;
