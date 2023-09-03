import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getPrivateJetPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPrivateJetPage();
    dispatch({
      type: CmsActionTypes.FETCH_PRIVATE_JET_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_PRIVATE_JET_PAGE_ERROR,
      payload: error.message,
    });
  }
};
