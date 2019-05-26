import React from "react";
import cn from "classnames";

/**
 * The tile component that acts as a clickable cell in the game field.
 * @param {*} props - component props
 */

type TileProps = {
    row: string,
    column: string
};

export default function Tile(props:TileProps) {
  const { row, column } = props;
  return <div className={cn("box", row, column)}>Hello</div>;
}
