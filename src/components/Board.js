import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => (
  // TODO: Populate the board with squares
  <div className="board">
    {squares.map((square, i) => <Square value={square} key = {i} onClick={() => onClick(i)} />)}
  </div>
);


export default Board;