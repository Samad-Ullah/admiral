import * as api from "../../api";
import { CmsActionTypes } from "./types";

// action creators

export const getContactPage = (email, phoneNumber, message) => async (
  dispatch
) => {
  dispatch({
    type: CmsActionTypes.CONTACT_US_PAGE_LOADING,
  });
  try {
    const { data } = await api.postContactPage(email, phoneNumber, message);

    dispatch({
      type: CmsActionTypes.CONTACT_US_PAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.CONTACT_US_PAGE_ERROR,
      payload: error.message,
    });
  }
};
