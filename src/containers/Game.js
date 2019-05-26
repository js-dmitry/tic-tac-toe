import React, { Component } from "react";
import Tile from "./../components/Tile";

/**
 * The main Game component
 */
class Game extends Component<{}> {
    render() {
        return (
            <div className="game">
                <Tile row="top" column="left"/>
                <Tile row="top" column="center"/>
                <Tile row="top" column="right"/>
                
                <Tile row="middle" column="left"/>
                <Tile row="middle" column="center"/>
                <Tile row="middle" column="right"/>

                <Tile row="bottom" column="left"/>
                <Tile row="bottom" column="center"/>
                <Tile row="bottom" column="right"/>
            </div>
          );
    }
}

export default Game;
