import * as api from "../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getAboutPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAboutPage();
    dispatch({
      type: CmsActionTypes.FETCH_ABOUT_US_PAGE,
      payload: data.data,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_ABOUT_US_PAGE_ERROR,
      payload: error.message,
    });
  }
};
