import * as api from "../../../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getGraduationTransferPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGraduationTransferPage();
    dispatch({
      type: CmsActionTypes.FETCH_GRADUATION_TRANSFER_PAGE,
      payload: data.modifiedResponse,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_GRADUATION_TRANSFER_PAGE_ERROR,
      payload: error.message,
    });
  }
};
