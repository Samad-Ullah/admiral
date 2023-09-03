import { CmsActionTypes } from "./types";
import { cancelBookingVerifyEmailAPI } from "../../../api/index";

import axios from "axios";
import { URL } from "../../../config/serverUrl";

export const cancelBookingVerifyEmailAction = (
  bookingId,
  email,
  history
) => async (dispatch) => {
  dispatch({ type: CmsActionTypes.CANCEL_BOOKING_VERIFY_EMAIL_REQUEST });
  try {
    // const response = await cancelBookingVerifyEmailAPI(bookingId, email);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      `${URL}/booking/send/verification-email`,
      { bookingId, email },
      config
    );

    localStorage.setItem("bookingId", bookingId);
    localStorage.setItem("email", email);

    dispatch({
      type: CmsActionTypes.CANCEL_BOOKING_VERIFY_EMAIL_SUCCESS,
      payload: response,
    });
    history.push("/cancel-booking-code-verify");
  } catch (error) {
    dispatch({
      type: CmsActionTypes.CANCEL_BOOKING_VERIFY_EMAIL_ERROR,
      payload: error.response.data.status,
    });
  }
};
