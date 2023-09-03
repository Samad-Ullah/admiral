import axios from "axios";
import { CmsActionTypes } from "./types";
import { URL } from "../../config/serverUrl";

// action creators

export const getBlogIdPage = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/website-content/get-blog/${id}`);

    dispatch({
      type: CmsActionTypes.FETCH_BLOG_ID_PAGE,
      payload: data,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.FETCH_BLOG_ID_PAGE_ERROR,
      payload: error.message,
    });
  }
};
