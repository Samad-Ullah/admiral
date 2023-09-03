import { AuthActionTypes } from "../constant/constant";
import { register, verifyEmail } from "../../../../api/index";

export const registerAction = (fullName, email, password,homeAddress,bilingAddress,companyName,phone_number, history) => async (
  dispatch
) => {
  dispatch({ type: AuthActionTypes.CREATE_ACOUNT_LOADING });
  try {
    const response = await register(fullName, email, password,homeAddress,bilingAddress,companyName,phone_number);

    const { message } = response.data;

    dispatch({
      type: AuthActionTypes.CREATE_ACCOUNT_SUCCESS,
      payload: message,
    });

    localStorage.setItem("email", JSON.stringify(email));
    history.push("/verify-otp");

    const res = await verifyEmail(email);
  } catch (err) {
    const error = !err.response.data.message
      ? "Something went wrong"
      : err.response.data.message;
    dispatch({
      type: AuthActionTypes.CREATE_ACCOUNT_ERROR,
      payload: error,
    });
    // dispatch({
    //   type: AuthActionTypes.CREATE_ACCOUNT_ERROR,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // });
  }
};
