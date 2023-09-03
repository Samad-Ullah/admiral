import * as api from "../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getMontgomeryLimoPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMontgomeryLimoPage();
    dispatch({
      type: CmsActionTypes.FETCH_MONTGOMERY_LIMO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_MONTGOMERY_LIMO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
