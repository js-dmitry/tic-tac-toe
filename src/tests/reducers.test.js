import ticTacToeReducer, { initialState } from "./../reducers";

describe("tic-tac-toe reducer", () => {
  it("should return the initial state", () => {
    expect(ticTacToeReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SELECT_TILE", () => {
    const selectTileAction = {
      type: "SELECT_TILE",
      selectedBy: "COMPUTER",
      tileId: 1
    };
    expect(ticTacToeReducer(initialState, selectTileAction)).toEqual({
      ...initialState,
      selectedTiles: 1,
      tiles: initialState.tiles.set(selectTileAction.tileId, {
        ...initialState.tiles.get(selectTileAction.tileId),
        isSelected: true,
        selectedBy: selectTileAction.selectedBy
      })
    });
  });

  it("should handle GAME_OVER when user wins", () => {
    const gameOverAction = {
      type: "GAME_OVER",
      win: { type: "USER" }
    };
    expect(ticTacToeReducer(initialState, gameOverAction)).toEqual({
      ...initialState,
      win: gameOverAction.win,
      canMove: false,
      userWins: 1,
      computerWins: 0
    });
  });

  it("should handle GAME_OVER when computer wins", () => {
    const gameOverAction = {
      type: "GAME_OVER",
      win: { type: "COMPUTER" }
    };
    expect(ticTacToeReducer(initialState, gameOverAction)).toEqual({
      ...initialState,
      win: gameOverAction.win,
      canMove: false,
      userWins: 0,
      computerWins: 1
    });
  });

  it("should handle GAME_OVER when there was a draw", () => {
    const gameOverAction = {
      type: "GAME_OVER",
      win: { type: "DRAW" }
    };
    expect(ticTacToeReducer(initialState, gameOverAction)).toEqual({
      ...initialState,
      win: gameOverAction.win,
      canMove: false,
      userWins: 0,
      computerWins: 0
    });
  });

  it("should handle NEW_GAME", () => {
    const newGameAction = {
      type: "NEW_GAME"
    };
    expect(ticTacToeReducer(initialState, newGameAction)).toEqual({
      ...initialState,
      userStarts: false
    });
  });
});
