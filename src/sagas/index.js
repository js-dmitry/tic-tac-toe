import { put, takeLatest } from "redux-saga/effects";

/**
 * A delay function
 * @param {Nmber} ms - how many milliseconds to wait
 */
const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * Tile select saga it will select the free cell if user done their move
 * @param {Object} action
 */
function* selectTileSaga(action) {
  if (action.selectedBy === "USER") {
    yield delay(700);
    yield put({
      type: "SELECT_TILE",
      tileId: 2,
      selectedBy: "COMPUTER"
    });
  }
}

export default function* ticTacToeSaga() {
  yield takeLatest("SELECT_TILE", selectTileSaga);
}
