import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  about_us_page: null,
  error: null,
};

const aboutReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_ABOUT_US_PAGE:
      return { ...state, loading: false, about_us_page: action.payload };
    case CmsActionTypes.FETCH_ABOUT_US_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default aboutReducer;
