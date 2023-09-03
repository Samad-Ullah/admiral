import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  sports_events_page: null,
  error: null,
};

const astroGameReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_SPORTS_EVENTS_PAGE:
      return {
        ...state,
        loading: false,
        sports_events_page: action.payload,
      };
    case CmsActionTypes.FETCH_SPORTS_EVENTS_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default astroGameReducer;