import * as api from "../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHoustonLimoPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHoustonLimoPage();
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_LIMO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_LIMO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
