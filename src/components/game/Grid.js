import React, { useState, useEffect } from 'react';

import '../../scss/Grid.scss';


const Grid = () => {
    // height of the board can be determined by the size of each cell since i know that we need a 25 by 25 cell grid
    const cellSize = 20;

    const boardHeight = 500;
    const boardWidth = 500;

    // caclulate how many rows and columns there are
    const boardRows = boardHeight / cellSize;
    const boardCols = boardWidth / cellSize;
    // Tracks board state
    const [board, setBoard] = useState({ columns: Array.from({ length: boardCols }, (x, i) => i), rows: Array.from({ length: boardRows }, (y, i) => i), cord: []});
    const [cells, setCells] = useState([])

    console.log(board)
    return (
        <div style={ { height: `${boardHeight}px`, width: `${boardWidth}px`, backgroundSize: `${cellSize}px ${cellSize}px` } } className="grid">
           
        </div>
    )
}


export default Grid;