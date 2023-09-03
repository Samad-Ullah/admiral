import { AuthActionTypes } from "../constant/constant";
// import { verifyOTP } from "../../../../api/index";

import axios from "axios";
import { URL } from "../../../../config/serverUrl";

export const verifyOTPAction = (email, code, history) => async (dispatch) => {
  dispatch({ type: AuthActionTypes.VERIFY_OTP_LOADING });
  try {
    // const response = await verifyOTP(email, code);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${URL}/verify/verify/email`,
      { email, code },
      config
    );

    dispatch({
      type: AuthActionTypes.VERIFY_OTP_SUCCESS,
      payload: response,
    });

    history.push("/login");
  } catch (error) {
    dispatch({
      type: AuthActionTypes.VERIFY_OTP_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
