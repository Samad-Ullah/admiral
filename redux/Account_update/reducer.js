import { CmsActionTypes } from "./types";

export const updateAccountDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case CmsActionTypes.UPDATE_ACCOUNT_DETAILS_LOADING:
      return { loading: true };
    case CmsActionTypes.UPDATE_ACCOUNT_DETAILS_SUCCESS:
      return { loading: false, success: true, user_update: action.payload };
    case CmsActionTypes.UPDATE_ACCOUNT_DETAILS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateAccountPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case CmsActionTypes.UPDATE_ACCOUNT_PASSWORD_LOADING:
      return { loading: true };
    case CmsActionTypes.UPDATE_ACCOUNT_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case CmsActionTypes.UPDATE_ACCOUNT_PASSWORD_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
