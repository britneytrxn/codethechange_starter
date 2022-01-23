import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from './Square';

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  let square = "X";
  const onClick = () => {
    console.log("click");
  }
  // create states
  const [board, setBoard] = useState(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true); 
  const currentWinner = calculateWinner(board);
  const xOrO = xIsNext?'X':'O';

  const handleClick = (i) => {
    console.log(i);
    // prevent action if winner declared or square taken 
    if (currentWinner || board[i]) return; 
    // otherwise pass in value and change player 
    board[i] = xOrO;
    // create copy of board
    setBoard([...board]);
    setStepNumber(stepNumber + 1);
    // setXIsNext to true = alternating
    setXIsNext(!xIsNext);
  };

  const jumpToStart = () => {
    // reset board and bring back to starting state
    setBoard(Array(9).fill(null));
    setStepNumber(0);
    setXIsNext(xIsNext);
  };

  const boardIsFull = () => {
    // checks if board is empty 
    for (let i = 0; i < 9; i++){
      if (!board[i]){
        return false; 
      }
    }
    return true; 
  }

  const result = () => {
    // winner 
    if (currentWinner){
      return "Winner:" + currentWinner;
    } else if (boardIsFull()){
      // tie
      return "Tie Game";
    } else {
      // next player
      return "Next Player:" + xOrO;
    }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div className='info-wrapper'>
        <div>
          <button onClick={jumpToStart}>Go to Start</button>
        </div>
        <h3>{result()}</h3> 
      </div>
    </>

  );
};

export default Game;
