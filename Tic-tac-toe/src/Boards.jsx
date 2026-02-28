import { useState } from "react";
import Square from "./Squares";

const Boards = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const handleClick = (index) => {

    if (squares[index]) return;

    const newSquares = [...squares];

    newSquares[index] = xTurn ? "X" : "O";

    setSquares(newSquares);

    setXTurn(!xTurn);
  };


  const winner = calculateWinner(squares);

  return (
    <>
      <h2>
        {winner ? "Winner: " + winner : "Turn: " + (xTurn ? "X" : "O")}
      </h2>

      <div className="board">

        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}

      </div>
    </>
  );
};

export default Boards;



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


  for (let line of lines) {

    const [a,b,c] = line;

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }

  }

  return null;
}
