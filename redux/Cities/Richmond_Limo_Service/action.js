import * as api from "../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getRichmondLimoPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRichmondLimoPage();
    dispatch({
      type: CmsActionTypes.FETCH_RICHMOND_LIMO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_RICHMOND_LIMO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
