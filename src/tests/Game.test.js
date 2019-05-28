import React from "react";
import { Provider } from "react-redux";
import { expect } from "chai";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";

import Game from "../containers/Game";
import Tile from "../components/Tile";
import { initialState } from "../reducers";

const middleware = [];
const mockStore = configureStore(middleware);

const mountComponent = props => {
  const store = mockStore(props);
  return mount(
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

describe("<Game /> component", () => {
  it("renders without crashing", () => {
    const wrapper = mountComponent(initialState);
    expect(wrapper.find(Game)).to.have.lengthOf(1);
  });

  it("renders 9 tiles", () => {
    const wrapper = mountComponent(initialState);
    expect(wrapper.find(Tile)).to.have.lengthOf(initialState.tiles.size);
  });
});
