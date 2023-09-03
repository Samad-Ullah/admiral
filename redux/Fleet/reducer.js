import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  fleet_page: null,
  error: null,
};

const fleetReducer =(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_FLEET_PAGE:
      return { ...state, loading: false, fleet_page: action.payload };
    case CmsActionTypes.FETCH_FLEET_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default fleetReducer;
