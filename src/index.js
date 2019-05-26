import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ticTacToeReducer from "./reducers";
import ticTacToeSaga from "./sagas";

// create store with saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(ticTacToeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(ticTacToeSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
