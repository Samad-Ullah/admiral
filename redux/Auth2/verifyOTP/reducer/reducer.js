import { AuthActionTypes } from "../constant/constant";

const verifyOTPReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthActionTypes.VERIFY_OTP_LOADING:
      return {
        loading: true,
      };
    case AuthActionTypes.VERIFY_OTP_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case AuthActionTypes.VERIFY_OTP_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default verifyOTPReducer;
