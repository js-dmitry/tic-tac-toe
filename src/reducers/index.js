import Immutable, { Map } from "immutable";
/**
 * Main game reducer, modifies the game state
 */

// tile type, selected by can be empty
export type TileType = {
  tileId: number,
  isSelected: boolean,
  selectedBy?: string,
  row?: string,
  column?: string
};

// state type with immutable tiles
export type State = {
  +tiles: Immutable.Map<number, TileType>,
  status: string,
  winner?: string,
  canMove: boolean,
  selectedTiles: number,
  userStarts: boolean,
  computerWins: number,
  userWins: number
};

// win type
export type WinType = {
  type: string
};

// action type
export type Action = {
  type: string,
  tileId: number,
  selectedBy: string,
  win: WinType
};

// initialise the state with empty game state
export const initialState: State = {
  tiles: Map([
    [1, { tileId: 1, isSelected: false, row: "top", column: "left" }],
    [2, { tileId: 2, isSelected: false, row: "top", column: "center" }],
    [3, { tileId: 3, isSelected: false, row: "top", column: "right" }],
    [4, { tileId: 4, isSelected: false, row: "middle", column: "left" }],
    [5, { tileId: 5, isSelected: false, row: "middle", column: "center" }],
    [6, { tileId: 6, isSelected: false, row: "middle", column: "right" }],
    [7, { tileId: 7, isSelected: false, row: "bottom", column: "left" }],
    [8, { tileId: 8, isSelected: false, row: "bottom", column: "center" }],
    [9, { tileId: 9, isSelected: false, row: "bottom", column: "right" }]
  ]),
  status: "IN_PROGRESS",
  canMove: true,
  selectedTiles: 0,
  userWins: 0,
  computerWins: 0,
  userStarts: true
};

// reducing
function ticTacToeReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "SELECT_TILE":
      return {
        ...state,
        selectedTiles: state.selectedTiles + 1,
        canMove: action.selectedBy === "COMPUTER",
        tiles: state.tiles.set(action.tileId, {
          ...state.tiles.get(action.tileId),
          isSelected: true,
          selectedBy: action.selectedBy
        })
      };
    case "GAME_OVER":
      const { win } = action;
      return {
        ...state,
        win,
        canMove: false,
        userWins: win.type === "USER" ? state.userWins + 1 : state.userWins,
        computerWins:
          win.type === "COMPUTER" ? state.computerWins + 1 : state.computerWins
      };
    case "NEW_GAME":
      return {
        ...initialState,
        userWins: state.userWins,
        computerWins: state.computerWins,
        userStarts: !state.userStarts,
        canMove: !state.userStarts
      };
    default:
      return state;
  }
}

export default ticTacToeReducer;
