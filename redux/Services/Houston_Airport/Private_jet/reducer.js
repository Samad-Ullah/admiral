import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  private_jet_page: null,
  error: null,
};

const privateJetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_PRIVATE_JET_PAGE:
      return {
        ...state,
        loading: false,
        private_jet_page: action.payload,
      };
    case CmsActionTypes.FETCH_GEORGE_PRIVATE_JET_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default privateJetReducer;