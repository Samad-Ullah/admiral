import { NewsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  news: null,
  error: null,
};

const newsReducer=  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { ...state, loading: false, news: action.payload };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default newsReducer;