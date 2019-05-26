import React from "react";
import cn from "classnames";

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
    <div className="selected">{selectedBy === "USER" ? "X" : "0"}</div>
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
