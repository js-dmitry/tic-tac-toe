import React from "react";
import { Provider } from "react-redux";
import { expect } from "chai";
import sinon from "sinon";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";

import Game from "../containers/Game";
import GameOver from "../containers/GameOver";
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

describe("<GameOver /> component", () => {
  it("renders when there is a win", () => {
    const wrapper = mountComponent({
      ...initialState,
      win: { type: "USER" },
      canMove: false,
      userWins: 1,
      computerWins: 0
    });
    expect(wrapper.find(GameOver)).to.have.lengthOf(1);
  });
});
