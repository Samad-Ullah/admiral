import { AuthActionTypes } from "../constant/constant";

const confirmPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthActionTypes.CONFIRM_PASSWORD_LOADING:
      return {
        loading: true,
      };
    case AuthActionTypes.CONFIRM_PASSWORD_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      };
    case AuthActionTypes.CONFIRM_PASSWORD_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default confirmPasswordReducer;
