import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  houston_limo_page: null,
  error: null,
};

const houstonLimoReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_HOUSTON_LIMO_PAGE:
      return { ...state, loading: false, houston_limo_page: action.payload };
    case CmsActionTypes.FETCH_HOUSTON_LIMO_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default houstonLimoReducer;
