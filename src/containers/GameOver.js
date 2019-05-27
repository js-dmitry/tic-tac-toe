import React from "react";
import type { WinType } from "./../reducers";
/**
 * The game over component that tells the user that hte game is over and lets them restart it
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
      <p>{win ? `${win.type} won!` : "Game Over"}</p>
      <a href="#" onClick={startNewGame} className="button">
        New Game
      </a>
    </div>
  );
}
