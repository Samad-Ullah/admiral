import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  faqs_page: null,
  error: null,
};

const faqsReducer =(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_FAQS_PAGE:
      return { ...state, loading: false, faqs_page: action.payload };
    case CmsActionTypes.FETCH_FAQS_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default faqsReducer;
