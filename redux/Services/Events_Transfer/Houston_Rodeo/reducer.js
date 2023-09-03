import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  houston_rodeo_page: null,
  error: null,
};

const houstonRodeoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_HOUSTON_RODEO_PAGE:
      return {
        ...state,
        loading: false,
        houston_rodeo_page: action.payload,
      };
    case CmsActionTypes.FETCH_HOUSTON_RODEO_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default houstonRodeoReducer;