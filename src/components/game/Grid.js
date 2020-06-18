import React, { useState, useEffect } from 'react';

import Cell from './Cell.js';

import '../../scss/Grid.scss';

 // height of the board can be determined by the size of each cell since i know that we need a 25 by 25 cell grid
 const cellSize = 25;

 const boardHeight = cellSize * cellSize;
 const boardWidth = cellSize * cellSize;

const generateInitialCellBlocks = () => {
    let cellArray = [];
    for (let i=0; i < cellSize*cellSize; i++) {
        cellArray.push(<Cell cellIndex={i} size={cellSize} active={false} />);
    }
   
    // using the code below i think i can figure out a way to set up initial blocks being preset with the preset buttons
    // console.log(cellArray[0])
    // cellArray[0] = <Cell cellIndex={0} size={cellSize} active={true} />


    return cellArray;
}

const toggleActive = (active) => {
    return !active;
}

const Grid = () => {  
    // Tracks board state
    // 
    const [currentCells, setCurrentCells] = useState([]);
    const [nextCells, setNextCells] = useState([]);

    useEffect(() => {
        setCurrentCells(generateInitialCellBlocks());
    }, [])

    useEffect(() => {

    }, [])

    return (
        <div style={ { height: `${boardHeight}px`, width: `${boardWidth}px`, backgroundSize: `${cellSize}px ${cellSize}px` } } className="grid">
            {currentCells}
        </div>
    )
}


export default Grid;