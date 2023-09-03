import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHoustonToLafayattePage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHoustonToLafayattePage();
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_LAFAYATTE_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_LAFAYATTE_PAGE_ERROR,
      payload: error.message,
    });
  }
};
