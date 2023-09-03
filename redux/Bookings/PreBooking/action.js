import * as api from '../../../api'
import { PreBookingActionTypes } from './types'

// action creators

// get quote
export const setBookingType = (booking) => async (dispatch) => {
        dispatch({ type: PreBookingActionTypes.ADD_BOOKING_TYPE , payload:booking })
}

export const setCar = (car) => async (dispatch) => {
    dispatch({ type: PreBookingActionTypes.ADD_CAR , payload:car })
}
export const setAccountDetails = (details) => async (dispatch) => {
    dispatch({ type: PreBookingActionTypes.ADD_ACCOUNT_DETAILS , payload:details })
}
export const setAmount = (amount) => async (dispatch) => {
    dispatch({ type: PreBookingActionTypes.ADD_AMOUNT , payload:amount })
}
export const setEmail = (email) => async (dispatch) => {
    dispatch({ type: PreBookingActionTypes.ADD_EMAIL , payload:email })
}
export const setDirection = (direction) => async (dispatch) => {
    dispatch({ type: PreBookingActionTypes.ADD_DIRECTION , payload:direction })
}
export const setMinFair = (MinFair) => async (dispatch) => {
    
    dispatch({ type: PreBookingActionTypes.ADD_MinFair , payload:MinFair })
}