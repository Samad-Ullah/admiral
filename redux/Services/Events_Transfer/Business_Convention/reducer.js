import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  business_convention_page: null,
  error: null,
};

const BusinessConventionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_BUSINESS_CONVENTION_PAGE:
      return {
        ...state,
        loading: false,
        business_convention_page: action.payload,
      };
    case CmsActionTypes.FETCH_BUSINESS_CONVENTION_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default BusinessConventionReducer;
