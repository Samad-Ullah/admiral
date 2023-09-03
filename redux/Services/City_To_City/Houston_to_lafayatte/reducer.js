import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  houston_to_lafayatte_page: null,
  error: null,
};

const houstonToLafayatteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_HOUSTON_TO_LAFAYATTE_PAGE:
      return {
        ...state,
        loading: false,
        houston_to_lafayatte_page: action.payload,
      };
    case CmsActionTypes.FETCH_HOUSTON_TO_LAFAYATTE_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default houstonToLafayatteReducer;
