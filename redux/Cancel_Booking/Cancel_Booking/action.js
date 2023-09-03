import { CmsActionTypes } from "./types";
import {
  cancelBookingVerifyCodeAPI,
  cancelBookingAPI,
} from "../../../api/index";

import axios from "axios";
import { URL } from "../../../config/serverUrl";

export const cancelBookingAction = (code, email, history) => async (
  dispatch
) => {
  dispatch({ type: CmsActionTypes.CANCEL_BOOKING_PAGE_REQUEST });
  try {
    // const response = await cancelBookingVerifyCodeAPI(code, email);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      `${URL}/booking/verify/email`,
      { code, email },
      config
    );

    const bookingId = localStorage.getItem("bookingId");

    if (response.status == 200) {
      const canc = await axios.post(
        `${URL}/booking/cancel-booking`,
        { bookingId },
        config
      );
    }
    dispatch({
      type: CmsActionTypes.CANCEL_BOOKING_PAGE_SUCCESS,
      payload: response,
    });

    history.push("/");
  } catch (error) {
    dispatch({
      type: CmsActionTypes.CANCEL_BOOKING_PAGE_ERROR,
      payload: error.message,
    });
  }
};
