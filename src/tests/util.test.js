import { expect } from "chai";
import sinon from "sinon";
import { mount } from "enzyme";
import { getTile, getRandomInt, getWin, getComputerStarts } from "./../util";
import { initialState } from "./../reducers";

describe("util functions", () => {
  it("getRandomInt", () => {
    const result = getRandomInt(1, 2);
    expect(result).to.equal(1);
  });
  it("getTile", () => {
    const tile = getTile(initialState);
    expect(tile).to.not.be.undefined;
  });
});
