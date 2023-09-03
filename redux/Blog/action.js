import * as api from "../../api";
import axios from "axios";
import { CmsActionTypes } from "./types";
import { URL } from "../../config/serverUrl";

// action creators

export const getBlogPage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPage();

    dispatch({
      type: CmsActionTypes.FETCH_BLOG_PAGE,
      payload: data,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_BLOG_PAGE_ERROR,
      payload: error.message,
    });
  }
};
