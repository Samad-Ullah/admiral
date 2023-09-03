import { PreBookingActionTypes } from './types'

let INITIAL_STATE = {
    bookingType: {},
    car: {},
    accountDetails: {},
    amount: null,
    direction:{},
    MinFair:null
}

const PreBookingReducer= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PreBookingActionTypes.ADD_BOOKING_TYPE:
            return { ...state, loading: false, bookingType: action.payload }
        case PreBookingActionTypes.ADD_CAR:
            return { ...state, loading: false, car: action.payload }
        case PreBookingActionTypes.ADD_ACCOUNT_DETAILS:
            return { ...state, loading: false, accountDetails: action.payload }
        case PreBookingActionTypes.ADD_AMOUNT:
            return { ...state, loading: false, amount: action.payload }
        case PreBookingActionTypes.ADD_EMAIL:
            return { ...state, loading: false, email: action.payload }
            case PreBookingActionTypes.ADD_DIRECTION:
                return { ...state, loading: false, direction: action.payload }
                case PreBookingActionTypes.ADD_MinFair:
                return { ...state, loading: false, MinFair: action.payload }
        default:
            return state
    }
}
export default PreBookingReducer;