import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  sugarland_limo_page: null,
  error: null,
};

const sugarlandLimoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_SUGARLAND_LIMO_PAGE:
      return { ...state, loading: false, sugarland_limo_page: action.payload };
    case CmsActionTypes.FETCH_SUGARLAND_LIMO_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default sugarlandLimoReducer;
