import { CmsActionTypes } from "./types";
import { RefundRequestAPI } from "../../api/index";

import axios from "axios";
import { URL } from "../../config/serverUrl";

export const RefundRequestAction = (
  bookingId,
  phoneNumber,
  accountNumber
) => async (dispatch) => {
  dispatch({ type: CmsActionTypes.REFUND_REQUEST_LOADING });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `${URL}/booking/refund-request`,
      { bookingId, phoneNumber, accountNumber },
      config
    );
    dispatch({
      type: CmsActionTypes.REFUND_REQUEST_SUCCESS,
      payload:response.data.status,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.REFUND_REQUEST_ERROR,
      payload: error.message,
    });
  }
};

export const confirmRefundRequest = (
  token
) => async (dispatch) => {
  dispatch({ type: CmsActionTypes.REFUND_REQUEST_CONFIRM_LOADING });
  try {
    const response = await axios.get(
      `${URL}/booking/refund-confirm/${token}`
    );
    dispatch({
      type: CmsActionTypes.REFUND_REQUEST_CONFIRM_SUCCESS,
      payload:response.data.success,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.REFUND_REQUEST_CONFIRM_ERROR,
      payload: error.response.data.status,
    });
  }
};
