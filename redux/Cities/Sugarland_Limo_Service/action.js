import * as api from "../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getSugarlandLimoPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSugarlandLimoPage();
    dispatch({
      type: CmsActionTypes.FETCH_SUGARLAND_LIMO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_SUGARLAND_LIMO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
