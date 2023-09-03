import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHoustonToDallasPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHoustonToDallasPage();
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_DALLAS_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOUSTON_TO_DALLAS_PAGE_ERROR,
      payload: error.message,
    });
  }
};
