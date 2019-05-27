import React from "react";
import cn from "classnames";
import cross from "./../img/cross.svg";
import circle from "./../img/circle.svg";

/**
 * The tile component that acts as a clickable cell in the game field.
 * This compoenent will be as "dumb" as possible
 * @param {*} props - component props
 */

type TileProps = {
  tileId: number,
  row: string,
  column: string,
  onClick: Function,
  isSelected: boolean,
  canMove: boolean,
  selectedBy: string
};

export default function Tile(props: TileProps) {
  const { row, column, onClick, isSelected, canMove, selectedBy } = props;

  const selection = isSelected ? (
    <div className="selected">
      <img className="selected-image" src={selectedBy === "USER" ? cross : circle} alt="tile" />
    </div>
  ) : null;

  return (
    <div
      className={cn("box", row, column)}
      onClick={() => {
        if (!isSelected && canMove) {
          onClick();
        }
      }}
    >
      {selection}
    </div>
  );
}
