import { AuthActionTypes } from "../constant/constant";
// import { forgotOTP } from "../../../../api/index";

import axios from "axios";
import { URL } from "../../../../config/serverUrl";

export const forgotOTPAction = (email, code, history) => async (dispatch) => {
  dispatch({ type: AuthActionTypes.FORGOT_OTP_LOADING });
  try {
    // const response = await forgotOTP(email, code);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${URL}/auth/reset-password/verify`,
      { email, code },
      config
    );

    const clientId = response.data.user._id;
    localStorage.setItem("clientId", clientId);
    dispatch({
      type: AuthActionTypes.FORGOT_OTP_SUCCESS,
      payload: response,
    });

    history.push("/change-password");
  } catch (error) {
    dispatch({
      type: AuthActionTypes.FORGOT_OTP_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
