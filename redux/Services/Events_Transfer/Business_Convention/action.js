import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getBusinessConventionPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBusinessConventionPage();
    dispatch({
      type: CmsActionTypes.FETCH_BUSINESS_CONVENTION_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_BUSINESS_CONVENTION_PAGE_ERROR,
      payload: error.message,
    });
  }
};
