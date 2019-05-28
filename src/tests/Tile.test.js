import React from "react";
import { expect } from "chai";
import sinon from "sinon";
import { mount } from "enzyme";

import Tile from "../components/Tile";

const mountComponent = props => {
  const store = mockStore(props);
  return mount(
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

describe("<Tile /> component", () => {
  it("renders without crahhing", () => {
    const wrapper = mount(
      <Tile
        key={1}
        tileId={1}
        row="top"
        column="left"
        isSelected={false}
        canMove={true}
        selectedBy=""
        onClick={() => {}}
      />
    );
    expect(wrapper.find(Tile)).to.have.lengthOf(1);
  });

  it("renders selected state crahhing", () => {
    const wrapper = mount(
      <Tile
        key={1}
        tileId={1}
        row="top"
        column="left"
        isSelected={true}
        canMove={true}
        selectedBy="USER"
        onClick={() => {}}
      />
    );
    expect(wrapper.find(".selected-image")).to.have.lengthOf(1);
  });

  it("onClick is being called when unselected tile is clicked", () => {
    const onTileClick = sinon.spy();
    const wrapper = mount(
      <Tile
        key={1}
        tileId={1}
        row="top"
        column="left"
        isSelected={false}
        canMove={true}
        selectedBy=""
        onClick={onTileClick}
      />
    );
    wrapper.find(".box").simulate("click");
    expect(onTileClick.calledOnce).to.equal(true);
  });

  it("onClick is being called when selected tile is clicked", () => {
    const onTileClick = sinon.spy();
    const wrapper = mount(
      <Tile
        key={1}
        tileId={1}
        row="top"
        column="left"
        isSelected={true}
        canMove={true}
        selectedBy="USER"
        onClick={onTileClick}
      />
    );
    wrapper.find(".box").simulate("click");
    expect(onTileClick.calledOnce).to.equal(false);
  });
});
