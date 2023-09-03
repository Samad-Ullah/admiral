import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHoustonRodeoPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHoustonRodeoPage();
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_RODEO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_RODEO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
