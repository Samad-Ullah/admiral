import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  galveston_cruise_page: null,
  error: null,
};

const galvestonCruiseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_GALVESTON_CRUISE_PAGE:
      return {
        ...state,
        loading: false,
        galveston_cruise_page: action.payload,
      };
    case CmsActionTypes.FETCH_GALVESTON_CRUISE_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default galvestonCruiseReducer;
