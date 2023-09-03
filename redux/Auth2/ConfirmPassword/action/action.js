import { AuthActionTypes } from "../constant/constant";
import { confirmPassword } from "../../../../api/index";

export const confirmPasswordAction = (userId, newPassword, history) => async (
  dispatch
) => {
  dispatch({ type: AuthActionTypes.CONFIRM_PASSWORD_LOADING });
  try {
    const response = await confirmPassword(userId, newPassword);

    dispatch({
      type: AuthActionTypes.CONFIRM_PASSWORD_SUCCESS,
      payload: response,
    });

    history.push("/login");
  } catch (error) {
    dispatch({
      type: AuthActionTypes.CONFIRM_PASSWORD_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
