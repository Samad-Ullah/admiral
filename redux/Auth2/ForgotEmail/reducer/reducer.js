import { AuthActionTypes } from "../constant/constant";

const forgotEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthActionTypes.FORGOT_EMAIL_LOADING:
      return {
        loading: true,
      };

    case AuthActionTypes.FORGOT_EMAIL_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case AuthActionTypes.FORGOT_EMAIL_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default forgotEmailReducer;
