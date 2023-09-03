import * as api from "../../api";
import { NewsActionTypes } from "./types";

// action creators

// get News
export const getNews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNews();
    dispatch({
      type: NewsActionTypes.FETCH_NEWS,
      payload: data.news,
    });
  } catch (error) {
    
    dispatch({
      type: NewsActionTypes.FETCH_NEWS_ERROR,
      payload: error.message,
    });
  }
};
