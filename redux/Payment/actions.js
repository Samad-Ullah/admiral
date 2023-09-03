import { PaymentActionTypes } from "./types";
import * as api from "../../api";
import { bookARide } from "../Bookings/Booking/action";

export const getToken = (history) => async (dispatch) => {
  dispatch({ type: PaymentActionTypes.INITIALIZATION_LOADING });
  try {
    const response = await api.fetchBraintreeToken();
    //save to local storage
    const { clientToken } = response.data;

    dispatch({
      type: PaymentActionTypes.INITIALIZATION_SUCCESS,
      payload: clientToken,
    });
  } catch (err) {
    const error = !err.response.data.message
      ? "Something went wrong"
      : err.response.data.message;
    dispatch({
      type: PaymentActionTypes.INITIALIZATION_ERROR,
      payload: error,
    });
    history.push("/error-confirm");
  }
};

export const executePayment = (Data, history) => async (dispatch) => {
 
  try {
    dispatch({ type: PaymentActionTypes.EXECUTE_PAYMENT_LOADING });

    const { data } = await api.executePayment(Data);
    const { result } = data;
    const { success,message } = result;

    if (success) {
      dispatch({
        type: PaymentActionTypes.EXECUTE_PAYMENT_SUCCESS,
        payload: data,
      });
      dispatch(bookARide());
      history.push("/success-confirm");
    } else {
      dispatch({
        type: PaymentActionTypes.EXECUTE_PAYMENT_ERROR,
        payload: message,
      });
    }
  } catch (error) {
    dispatch({
      type: PaymentActionTypes.EXECUTE_PAYMENT_ERROR,
      payload: error.response.data,
    });
  }
};
