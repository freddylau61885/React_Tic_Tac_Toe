import {useState} from 'react';

function Square({val, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{val}</button> 
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    //check squares exist
    if (squares[i]) {
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

  return (
    <>
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
  