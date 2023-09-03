import * as api from "../../api";
import { CmsActionTypes } from "./types";

// action creators

export const getContactDetailsPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchContactDetailsPage();

    dispatch({
      type: CmsActionTypes.FETCH_CONTACT_DETAILS_PAGE,
      payload: data,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_CONTACT_DETAILS_PAGE_ERROR,
      payload: error.message,
    });
  }
};
