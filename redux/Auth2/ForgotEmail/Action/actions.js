import { AuthActionTypes } from "../constant/constant";
import { forgotEmail } from "../../../../api/index";

export const forgotEmailAction = (email, history) => async (dispatch) => {
  dispatch({ type: AuthActionTypes.FORGOT_EMAIL_LOADING });
  try {
    const response = await forgotEmail(email);

    dispatch({
      type: AuthActionTypes.FORGOT_EMAIL_SUCCESS,
      payload: response,
    });

    localStorage.setItem("email", JSON.stringify(email));

    history.push("/forgot-otp");
  } catch (error) {
    dispatch({
      type: AuthActionTypes.FORGOT_EMAIL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
