import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  cypress_limo_page: null,
  error: null,
};

const cypressLimoReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_CYPRESS_LIMO_PAGE:
      return { ...state, loading: false, cypress_limo_page: action.payload };
    case CmsActionTypes.FETCH_CYPRESS_LIMO_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default cypressLimoReducer;
