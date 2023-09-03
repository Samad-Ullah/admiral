import * as api from "../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getGalvestonLimoPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGalvestonLimoPage();
    dispatch({
      type: CmsActionTypes.FETCH_GALVESTON_LIMO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_GALVESTON_LIMO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
