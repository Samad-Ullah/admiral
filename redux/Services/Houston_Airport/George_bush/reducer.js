import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  george_bush_page: null,
  error: null,
};

const georgeBushReducer =(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_GEORGE_BUSH_PAGE:
      return {
        ...state,
        loading: false,
        george_bush_page: action.payload,
      };
    case CmsActionTypes.FETCH_GEORGE_BUSH_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default georgeBushReducer;