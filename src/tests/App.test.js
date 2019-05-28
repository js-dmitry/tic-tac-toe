import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { expect } from "chai";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";

import App from "../App";
import { initialState } from "../reducers";

const middleware = [];
const mockStore = configureStore(middleware);
const store = mockStore(initialState);
const wrapper = mount(
  <Provider store={store}>
    <App />
  </Provider>
);

describe("<App />", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(App)).to.have.lengthOf(1);
  });
});