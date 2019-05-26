/**
 * An action that selects the tile
 * @param {number} tileId - the id of selected tile
 * @param {sting} selectedBy - the player that selected the tile
 */
export const selectTile = (tileId: number, selectedBy: string) => ({
  type: "SELECT_TILE",
  tileId,
  selectedBy
});
