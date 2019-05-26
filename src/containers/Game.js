import React, { Component } from "react";
import Tile from "../components/Tile";
import { connect } from "react-redux";

// Types
type TileType = {
  tileId: number,
  isSelected: boolean,
  selectedBy: string,
  row: string,
  column: string
};

type GameProps = {
  selectTile: Function,
  tiles: Array<TileType>,
  canMove: boolean
};

/**
 * The main Game component.
 * This is where gost of the presentation logic will exist
 */
class Game extends Component<GameProps> {
  render() {
    const { selectTile, tiles, canMove } = this.props;
    return (
      <div className="game">
        {tiles.map((tile, key) => {
          return (
            <Tile
              key={key}
              tileId={tile.tileId}
              row={tile.row}
              column={tile.column}
              isSelected={tile.isSelected}
              canMove={canMove}
              selectedBy={tile.selectedBy}
              onClick={() => {
                selectTile(tile.tileId, "USER");
              }}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tiles: [...state.tiles.values()],
  canMove: state.canMove
});

const mapDispatchToProps = dispatch => ({
  selectTile: (tileId: number, selectedBy: String) => {
    dispatch({ type: "SELECT_TILE", tileId, selectedBy });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
