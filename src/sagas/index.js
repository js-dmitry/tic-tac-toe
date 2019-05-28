import { put, takeLatest, select } from "redux-saga/effects";
import { getTile, getRandomInt, getWin, getComputerStarts } from "./../util";

/**
 * A delay function
 * @param {Nmber} ms - how many milliseconds to wait
 */
const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * Tile select saga it will select the free cell if user done their move
 * @param {Object} action
 */
export function* selectTileSaga(action): Iterable<*> {
  yield delay(100);
  // check for win after each move
  const win = yield select(getWin);
  // if game ended
  const gameOver = yield select(state => state.selectedTiles === 9);

  if (win || gameOver) {
    yield put({
      type: "GAME_OVER",
      win: win || { type: "DRAW" }
    });
  } else if (action.selectedBy === "USER") {
    const tile = yield select(getTile);
    yield delay(getRandomInt(500, 1500)); // delay for .5 to 1.5 seconds
    yield put({
      type: "SELECT_TILE",
      tileId: tile.tileId,
      selectedBy: "COMPUTER"
    });
  }
}

/**
 * Starts the game if the new game is started and it's computer's turn to start
 * @param {Object} action
 */
export function* newGameSaga(action): Iterable<*>  {
  // see if it's computer's turn to start
  const makeMove = yield select(getComputerStarts);

  if (makeMove) {
    const tile = yield select(getTile);
    yield delay(getRandomInt(500, 1500)); // delay for .5 to 1.5 seconds
    yield put({
      type: "SELECT_TILE",
      tileId: tile.tileId,
      selectedBy: "COMPUTER"
    });
  }
}

export default function* ticTacToeSaga() {
  yield takeLatest("SELECT_TILE", selectTileSaga);
  yield takeLatest("NEW_GAME", newGameSaga);
}
