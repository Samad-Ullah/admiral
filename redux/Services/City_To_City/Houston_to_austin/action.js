import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHoustonToAustinPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHoustonToAustinPage();
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_AUSTIN_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_AUSTIN_PAGE_ERROR,
      payload: error.message,
    });
  }
};
