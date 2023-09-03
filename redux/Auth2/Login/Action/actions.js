import { AuthActionTypes } from "../constant/constant";
import { login } from "../../../../api/index";

export const loginAction = (email, password, history) => async (dispatch) => {
  dispatch({ type: AuthActionTypes.LOGIN_LOADING });
  try {
    const response = await login(email, password);

    // save to local storage
    const { accessToken } = response.data;

    dispatch({
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: response.data.userData,
    });
    if(typeof window!="undefined"){
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("senderId", response.data.userData._id);
      localStorage.setItem("userEmail", response.data.userData.email);
      localStorage.setItem("userFullName", response.data.userData.fullName);
      localStorage.setItem("userAvatar", response.data.userData.avatar)
    }
  

    history.push("/");
  } catch (error) {
    dispatch({
      type: AuthActionTypes.LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
