import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getConcertsPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchConcertsPage();
    dispatch({
      type: CmsActionTypes.FETCH_CONCERTS_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_CONCERTS_PAGE_ERROR,
      payload: error.message,
    });
  }
};
