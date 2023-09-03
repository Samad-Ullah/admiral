import { CmsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  birthday_party_transfer_page: null,
  error: null,
};

const birthdayPartyTransferReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CmsActionTypes.FETCH_BIRTHDAY_PARTY_TRANSFER_PAGE:
      return {
        ...state,
        loading: false,
        birthday_party_transfer_page: action.payload,
      };
    case CmsActionTypes.FETCH_BIRTHDAY_PARTY_TRANSFER_PAGE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default birthdayPartyTransferReducer;