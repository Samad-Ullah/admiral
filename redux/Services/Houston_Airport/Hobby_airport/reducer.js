import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  hobby_airport_page: null,
  error: null,
};

const hobbyAirportReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_HOBBY_AIRPORT_PAGE:
      return {
        ...state,
        loading: false,
        hobby_airport_page: action.payload,
      };
    case CmsActionTypes.FETCH_HOBBY_AIRPORT_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default hobbyAirportReducer;
