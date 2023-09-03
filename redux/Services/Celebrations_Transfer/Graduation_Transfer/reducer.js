import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  graduation_transfer_page: null,
  error: null,
};

const graduationTransferReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_GRADUATION_TRANSFER_PAGE:
      return {
        ...state,
        loading: false,
        graduation_transfer_page: action.payload,
      };
    case CmsActionTypes.FETCH_GRADUATION_TRANSFER_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default graduationTransferReducer;
