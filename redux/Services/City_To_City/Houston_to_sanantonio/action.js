import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHoustonToSanantonioPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHoustonToSanantonioPage();
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_SANANTONIO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_SANANTONIO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
