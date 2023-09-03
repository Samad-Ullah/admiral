import * as api from "../../api";
import { CmsActionTypes } from "./types";

// action creators

// get fleet
export const getFaqsPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFaqsPage();
    dispatch({
      type: CmsActionTypes.FETCH_FAQS_PAGE,
      payload: data.faqs,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_FAQS_PAGE_ERROR,
      payload: error.message,
    });
  }
};
