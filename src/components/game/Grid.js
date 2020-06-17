import React, { useState, useEffect } from 'react';

import '../../scss/Grid.scss';


const Grid = () => {
    // height of the board can be determined by the size of each cell since i know that we need a 25 by 25 cell grid
    const cellSize = 20;
    const boardSize = cellSize * 25;
    // Tracks board state
    const [board, setBoard] = useState([]);
    const [cells, setCells] = useState([])

    return (
        <div style={ { height: `${boardSize}px`, width: `${boardSize}px`, backgroundSize: `${cellSize}px ${cellSize}px` } } className="grid">
           
        </div>
    )
}


export default Grid;