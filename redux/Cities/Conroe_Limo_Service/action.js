import * as api from "../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getConroeLimoPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchConroeLimoPage();
    dispatch({
      type: CmsActionTypes.FETCH_CONROE_LIMO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_CONROE_LIMO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
