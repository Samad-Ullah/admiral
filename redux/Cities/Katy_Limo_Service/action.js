import * as api from "../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getKatyLimoPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchKatyLimoPage();
    dispatch({
      type: CmsActionTypes.FETCH_KATY_LIMO_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_KATY_LIMO_PAGE_ERROR,
      payload: error.message,
    });
  }
};
