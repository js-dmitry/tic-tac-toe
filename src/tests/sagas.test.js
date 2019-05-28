import { take, call, put, takeLatest, select } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { selectTileSaga, newGameSaga } from "./../sagas";
import { assert } from "chai";
import { getTile, getRandomInt, getWin, getComputerStarts } from "./../util";
import ticTacToeReducer, { initialState } from "./../reducers";

describe("selectTileSaga", () => {
  const selectTileAction = {
    type: "SELECT_TILE",
    selectedBy: "COMPUTER",
    tileId: 1
  };

  it("calls getWin", () => {
    return expectSaga(selectTileSaga, selectTileAction)
      .withReducer(ticTacToeReducer)
      .select(getWin)
      .run();
  });

  it("has the correct final state", () => {
    return expectSaga(selectTileSaga, selectTileAction)
      .withReducer(ticTacToeReducer)
      .hasFinalState(initialState)
      .run();
  });
});

describe("newGameSaga", () => {
  const newGameAction = {
    type: "NEW_GAME"
  };

  it("calls getWin", () => {
    return expectSaga(newGameSaga, newGameAction)
      .withReducer(ticTacToeReducer)
      .select(getComputerStarts)
      .run();
  });
});