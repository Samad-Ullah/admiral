import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
  // applyMiddleware(...middlewares)
);

export default store;
