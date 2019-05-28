import React from "react";
import "./scss/App.scss";
import Game from "./containers/Game";
/**
 * Application entry point can be used to host several <Game /> components
 */
function App() {
  return (
    <div className="container">
      <h1>TIC-TAC-TOE</h1>
      <Game />
    </div>
  );
}

export default App;
