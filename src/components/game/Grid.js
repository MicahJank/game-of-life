import React, { useState, useEffect } from 'react';

import Cell from './Cell.js';

import '../../scss/Grid.scss';

 // height of the board can be determined by the size of each cell since i know that we need a 25 by 25 cell grid
 const cellSize = 25;

 const boardHeight = cellSize * cellSize;
 const boardWidth = cellSize * cellSize;

// caclulate how many rows and columns there are
const boardRows = boardHeight / cellSize;
const boardCols = boardWidth / cellSize;

// const createBoard = (numOfCols, numOfRows) => {
//     let board = new Array(numOfRows);

//     for (let y = 0; y < numOfRows; y++) {
//         board[y] = new Array(numOfCols);
//     }

//     return board;
// }

const createCells = () => {
    let cellArray = Array.from({ length: cellSize * cellSize});
    
    return cellArray;
}

const Grid = () => {  
    // Tracks board state
    const [board, setBoard] = useState([]);
    const [cells, setCells] = useState([]);

    useEffect(() => {
        // setBoard(createBoard(boardCols, boardRows));
        setCells(createCells());
    }, [])

    return (
        <div style={ { height: `${boardHeight}px`, width: `${boardWidth}px`, backgroundSize: `${cellSize}px ${cellSize}px` } } className="grid">
            {cells.map((current) => {
                return <Cell size={cellSize} active={false} />
            })}
        </div>
    )
}


export default Grid;