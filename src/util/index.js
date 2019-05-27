import type { State } from "./../reducers";
/**
 * Utilities
 */

/**
 * A winning combination cells
 */
export const winningCombinations = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [4, 5, 6],
  [2, 5, 8],
  [3, 6, 9],
  [7, 8, 9],
  [7, 5, 3]
];

/**
 * Get random int within range
 * The maximum is exclusive and the minimum is inclusive
 * @param {Number} min - minimum
 * @param {Number} max - maximum
 * @returns {Number} random number within range
 */
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Gets a random unselected tile
 * @param {State} state
 */
export const getTile = (state: State) => {
  // try to get potential combination
  const potentialCombinationTile = getPotentialCombinationTile(state);

  if (potentialCombinationTile) {
    return potentialCombinationTile;
  }

  let tileIds = [];
  state.tiles.forEach((value, key) => {
    if (!value.isSelected) {
      tileIds.push(key);
    }
  });

  // select random tile
  return state.tiles.get(tileIds[getRandomInt(0, tileIds.length)]);
};

/**
 * Tries to figure out the winning combination that is not taken by the user and returns the tile from it
 * @param {State} state
 * @returns {Tile} tile object
 */
const getPotentialCombinationTile = (state: State) => {
  let potentialTile;
  // get the combination that is not taken by the user
  winningCombinations.find(combo => {
    let potentialCombo = [];
    combo.map(cell => {
      const tile = state.tiles.get(cell);
      if (tile.selectedBy !== "USER") {
        // if tile is not selected by user add it to the list
        potentialCombo.push(tile);
      }
    });

    // if there is a combination found
    if (potentialCombo.length > 2) {
      // get the first not selected tile
      potentialTile = potentialCombo.filter(tile => !tile.isSelected)[0];
      return true; // return true here to stop the loop
    }
  });

  return potentialTile;
};

/**
 * Check for win
 * @param {State} state
 */
export const getWin = (state: State) => {
  // no need to check if there are less than 3 selected
  if (state.selectedTiles < 3) {
    return null;
  }

  let win;

  // loop through winning combos
  winningCombinations.find(combo => {
    let userTiles = [];
    let computerTiles = [];
    // get the combination cells
    combo.map(cell => {
      const tile = state.tiles.get(cell);

      // see tile is selected by either of the players, if it is push it to the array
      if (tile.isSelected) {
        if (tile.selectedBy === "USER") {
          userTiles.push(tile);
        }
        if (tile.selectedBy === "COMPUTER") {
          computerTiles.push(tile);
        }
      }
    });

    // if any of the arrays have 3 elements, player wins
    if (userTiles.length > 2) {
      win = { type: "USER" };
      return true;
    }

    if (computerTiles.length > 2) {
      win = { type: "COMPUTER" };
      return true;
    }
  });

  return win;
};
