import React, { Component } from "react";
import Tile from "../components/Tile";
import { connect } from "react-redux";
import GameOver from "./GameOver";
import type { TileType, WinType } from "./../reducers";

type GameProps = {
  selectTile: Function,
  tiles: Array<TileType>,
  canMove: boolean,
  gameOver: boolean,
  startNewGame: Function,
  win: WinType,
  userWins: number,
  computerWins: number
};

/**
 * The main Game component.
 * This is where gost of the presentation logic will exist
 */
class Game extends Component<GameProps> {
  render() {
    const {
      selectTile,
      tiles,
      canMove,
      win,
      userWins,
      computerWins,
      startNewGame,
      gameOver
    } = this.props;

    const gameOverComponent =
      win || gameOver ? (
        <GameOver startNewGame={startNewGame} win={win} />
      ) : null;

    return (
      <React.Fragment>
        <div className="header">
          <div>USER: {userWins}</div>
          <div>COMPUTER: {computerWins}</div>
        </div>
        <div className="game">
          {gameOverComponent}
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tiles: [...state.tiles.values()],
  canMove: state.canMove,
  win: state.win,
  userWins: state.userWins,
  computerWins: state.computerWins,
  gameOver: state.gameOver
});

const mapDispatchToProps = dispatch => ({
  selectTile: (tileId: number, selectedBy: String) => {
    dispatch({ type: "SELECT_TILE", tileId, selectedBy });
  },
  startNewGame: () => {
    dispatch({ type: "NEW_GAME" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
