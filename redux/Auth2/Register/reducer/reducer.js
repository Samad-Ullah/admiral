import { AuthActionTypes } from "../constant/constant";

const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthActionTypes.CREATE_ACOUNT_LOADING:
      return {
        loading: true,
      };
    case AuthActionTypes.CREATE_ACCOUNT_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case AuthActionTypes.CREATE_ACCOUNT_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default registerReducer;
