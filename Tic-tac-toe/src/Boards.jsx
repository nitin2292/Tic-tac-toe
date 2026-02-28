import React , { useState } from 'react'
import Squares from './Squares';
const Boards =()=>{
    const [board, setBoard] = useState(Array(9).fill(null));

    return(
        <>
        <div className = "board-container">
        <div className='board'> <Squares value={board[0]}/>
        <Squares value={board[1]}/>
        <Squares value={board[2]}/>
        </div>
        <div className='board'> <Squares value={board[3]}/>
        <Squares value={board[4]}/>
        <Squares value={board[5]}/>
        </div>
        <div className='board'> <Squares value={board[6]}/>
        <Squares value={board[7]}/>
        <Squares value={board[8]}/>
        </div>
       </div>
        </> 
    )
}
export default Boards