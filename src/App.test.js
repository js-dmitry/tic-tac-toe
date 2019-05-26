import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import Game from "./containers/Game";
import Tile from "./components/Tile";
import { expect } from "chai";
import sinon from "sinon";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { initialState } from "./reducers";
import configureStore from "redux-mock-store";

// configure the enzyme adapter to work with react 16
configure({ adapter: new Adapter() });

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

describe("<Game />", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Game)).to.have.lengthOf(1);
  });

  it("renders 9 tiles", () => {
    expect(wrapper.find(Tile)).to.have.lengthOf(initialState.tiles.size);
  });
});
