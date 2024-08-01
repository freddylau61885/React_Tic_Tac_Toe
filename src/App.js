import {useState} from 'react';

function Square({val, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{val}</button> 
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  let winner, status; 

  function handleClick(i){
    winner = calculateWinner(squares);
    //check squares exist
    if (squares[i] || winner) {
      return;
    }
    //copy a new array
    const nextSquares = squares.slice();
    //check next is X or not
    if (xIsNext) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  winner = calculateWinner(squares);
  if (winner) {
    status = 'Winner:' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square val={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square val={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square val={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square val={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square val={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square val={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square val={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square val={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square val={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i=0; i< lines.length; i++) {
    const [a,b,c] = lines[i];
    //check board squares a = b = c
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //return winner
      return squares[a];
    }
  }

  //no winner, game keep going
  return null
}
  