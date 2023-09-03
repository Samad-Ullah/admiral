import * as api from "../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getGalvestonCruisePage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGalvestonCruisePage();
    dispatch({
      type: CmsActionTypes.FETCH_GALVESTON_CRUISE_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_GALVESTON_CRUISE_PAGE_ERROR,
      payload: error.message,
    });
  }
};
