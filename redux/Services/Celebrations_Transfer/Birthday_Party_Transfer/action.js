import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getBirthdayPartyTransferPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBirthdayPartyTransferPage();
    dispatch({
      type: CmsActionTypes.FETCH_BIRTHDAY_PARTY_TRANSFER_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_BIRTHDAY_PARTY_TRANSFER_PAGE_ERROR,
      payload: error.message,
    });
  }
};
