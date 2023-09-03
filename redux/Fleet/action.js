import * as api from "../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getFleetPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFleetPage();
    dispatch({
      type: CmsActionTypes.FETCH_FLEET_PAGE,
      payload: data.fleets,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_FLEET_PAGE_ERROR,
      payload: error.message,
    });
  }
};
