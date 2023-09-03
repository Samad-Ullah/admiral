import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  concerts_page: null,
  error: null,
};

const concertsReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_CONCERTS_PAGE:
      return {
        ...state,
        loading: false,
        concerts_page: action.payload,
      };
    case CmsActionTypes.FETCH_CONCERTS_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default concertsReducer;