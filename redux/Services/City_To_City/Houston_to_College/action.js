import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHoustonToCollegePage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHoustonToCollegePage();
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_COLLEGE_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_COLLEGE_PAGE_ERROR,
      payload: error.message,
    });
  }
};
