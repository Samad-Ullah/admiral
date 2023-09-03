import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  contact_details_page: null,
  error: null,
};

const contactDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_CONTACT_DETAILS_PAGE:
      return { ...state, loading: false, contact_details_page: action.payload };
    case CmsActionTypes.FETCH_CONTACT_DETAILS_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default contactDetailsReducer;