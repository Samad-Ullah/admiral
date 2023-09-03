import { AuthActionTypes } from "../constant/constant";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_LOADING:
      return {
        loading: true,
      };

    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case AuthActionTypes.LOGIN_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
