import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  houston_to_sanantonio_page: null,
  error: null,
};

const houstonToSanantonioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_HOUSTON_TO_SANANTONIO_PAGE:
      return {
        ...state,
        loading: false,
        houston_to_sanantonio_page: action.payload,
      };
    case CmsActionTypes.FETCH_HOUSTON_TO_SANANTONIO_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default houstonToSanantonioReducer;
