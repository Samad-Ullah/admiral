import { CmsActionTypes } from "./types";

const contactReducer =(state = {}, action) => {
  switch (action.type) {
    case CmsActionTypes.CONTACT_US_PAGE_LOADING:
      return { loading: true };
    case CmsActionTypes.CONTACT_US_PAGE_SUCCESS:
      return { loading: false, success: true, contact_us_page: action.payload };
    case CmsActionTypes.CONTACT_US_PAGE_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export default contactReducer;
