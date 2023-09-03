import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getGeorgeBushPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGeorgeBushPage();
    dispatch({
      type: CmsActionTypes.FETCH_GEORGE_BUSH_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_GEORGE_BUSH_PAGE_ERROR,
      payload: error.message,
    });
  }
};
