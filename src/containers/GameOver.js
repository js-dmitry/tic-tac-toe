import React from "react";
import type { WinType } from "./../reducers";
/**
 * The game over component that tells the user that the game is over and lets them restart it
 * @param {*} props - component props
 */

type GameOverProps = {
  startNewGame: Function,
  win: WinType
};

export default function GameOver(props: GameOverProps) {
  const { startNewGame, win } = props;

  return (
    <div className="game-over">
      <p>{win && win.type !== "DRAW" ? `${win.type} won!` : "Game Over"}</p>
      <button onClick={startNewGame} className="button">
        New Game
      </button>
    </div>
  );
}
