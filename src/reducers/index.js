/**
 * Main game reducer, modifies the game state
 */

// tile type, selected by can be empty
type TileType = {
  isSelected: boolean,
  selectedBy?: string,
  row?: string,
  column?: string
};

// state type with immutable tiles
type State = {
  +tiles: Map<number, TileType>,
  status: string,
  winner?: string,
  canMove: boolean
};

// action type
type Action = {
  type: string,
  tileId: number,
  selectedBy: string
};

// initialise the state with empty game state
export const initialState = {
  tiles: new Map([
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
  canMove: true
};

// reducing
function ticTacToeReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "SELECT_TILE":
      return {
        ...state,
        canMove: action.selectedBy === "COMPUTER",
        tiles: state.tiles.set(action.tileId, {
          ...state.tiles.get(action.tileId),
          isSelected: true,
          selectedBy: action.selectedBy
        })
      };
    default:
      return state;
  }
}

export default ticTacToeReducer;
