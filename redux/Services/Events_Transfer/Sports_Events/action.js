import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getSportsEventsPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSportsEventsPage();
    dispatch({
      type: CmsActionTypes.FETCH_SPORTS_EVENTS_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_SPORTS_EVENTS_PAGE_ERROR,
      payload: error.message,
    });
  }
};
