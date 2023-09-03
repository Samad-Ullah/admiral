import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHoustonTLakecharlesPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHoustonToLakecharlesPage();
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_LAKECHARLES_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_LAKECHARLES_PAGE_ERROR,
      payload: error.message,
    });
  }
};
