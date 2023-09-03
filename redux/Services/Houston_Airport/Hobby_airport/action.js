import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getHobbyAirportPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHobbyAirportPage();
    dispatch({
      type: CmsActionTypes.FETCH_HOBBY_AIRPORT_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_HOBBY_AIRPORT_PAGE_ERROR,
      payload: error.message,
    });
  }
};
