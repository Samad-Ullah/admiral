import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  blog_id_page: null,
  error: null,
};

const blogIdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_BLOG_ID_PAGE:
      return { ...state, loading: false, blog_id_page: action.payload };
    case CmsActionTypes.FETCH_BLOG_ID_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default blogIdReducer;
