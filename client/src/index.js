import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import recallReducer from "./reducers/recallReducer";
// import searchReducer from "./reducers/searchReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  data: recallReducer
  //   searchTerm: searchReducer
});
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
