import { AuthActionTypes } from "../constant/constant";

const forgotOTPReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthActionTypes.FORGOT_OTP_LOADING:
      return {
        loading: true,
      };
    case AuthActionTypes.FORGOT_OTP_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      };
    case AuthActionTypes.FORGOT_OTP_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default forgotOTPReducer;
