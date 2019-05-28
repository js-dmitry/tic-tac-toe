import { expect } from "chai";
import { mount } from "enzyme";
import {
  getTile,
  getRandomInt,
  getWin,
  getPotentialCombinationTile
} from "./../util";
import { initialState } from "./../reducers";

describe("util functions", () => {
  it("getRandomInt should return 1 when range is between 1 and 2", () => {
    const result = getRandomInt(1, 2);
    expect(result).to.equal(1);
  });

  it("getTile should rturn random tile", () => {
    const tile = getTile(initialState);
    expect(tile).to.not.be.undefined;
  });

  it("getWin should return null when no tiles selected", () => {
    const win = getWin(initialState);
    expect(win).to.be.null;
  });

  it("getWin should return a win object with USER type when there is a winning combination", () => {
    const win = getWin({
      ...initialState,
      tiles: initialState.tiles
        .set(1, {
          ...initialState.tiles.get(1),
          isSelected: true,
          selectedBy: "USER"
        })
        .set(2, {
          ...initialState.tiles.get(2),
          isSelected: true,
          selectedBy: "USER"
        })
        .set(3, {
          ...initialState.tiles.get(3),
          isSelected: true,
          selectedBy: "USER"
        }),
      selectedTiles: 3
    });
    expect(win).to.deep.equal({ type: "USER" });
  });

  it("getPotentialCombinationTile should return a tile object when no tiles selected", () => {
    const tile = getPotentialCombinationTile(initialState);
    expect(tile).to.deep.equal({
      tileId: 1,
      isSelected: false,
      row: "top",
      column: "left"
    });
  });
});
