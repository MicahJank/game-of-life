import React, { useState, useEffect } from 'react';

import Cell from './Cell.js';

import '../../scss/Grid.scss';

 // height of the board can be determined by the size of each cell since i know that we need a 25 by 25 cell grid
 const cellSize = 20;

 const boardHeight = 500;
 const boardWidth = 500;

// caclulate how many rows and columns there are
const boardRows = boardHeight / cellSize;
const boardCols = boardWidth / cellSize;

const createBoard = (numOfCols, numOfRows) => {
//    const board = { 
//         columns: Array.from({ length: numOfCols }, (x, i) => i), 
//         rows: Array.from({ length: numOfRows }, (y, i) => i), 
//         cord: []
//     }

    let board = new Array(numOfRows);

    for (let y = 0; y < numOfRows; y++) {
        board[y] = new Array(numOfCols);
    }

    return board;
}

const createCells = () => {
    let cellArray = [];

    for (let i = 0; i < boardRows; i++) {

        for (let j = 0; j < boardCols; j++) {
            cellArray.push(<Cell />)
        }
    }

    return cellArray;
}

const Grid = () => {  
    // Tracks board state
    const [board, setBoard] = useState([]);
    const [cells, setCells] = useState([]);

    useEffect(() => {
        setBoard(createBoard(boardCols, boardRows));
        setCells(createCells());
    }, [])

    console.log(cells);

    return (
        <div style={ { height: `${boardHeight}px`, width: `${boardWidth}px`, backgroundSize: `${cellSize}px ${cellSize}px` } } className="grid">
            {cells}
        </div>
    )
}


export default Grid;