import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';

import Cell from './Cell.js';

import '../../scss/Grid.scss';

 // height of the board can be determined by the size of each cell since i know that we need a 25 by 25 cell grid
 const cellSize = 25;

 const boardHeight = cellSize * cellSize;
 const boardWidth = cellSize * cellSize;

const Grid = () => {  
    const currentGrid = useSelector(state => state.grid.currentCells);

    const dispatch = useDispatch();

    // initializes the empty grid when the web page loads
    useEffect(() => {
        let gridSize = cellSize * cellSize;
        let cellArray = [];
    
        for (let i = 0; i < gridSize; i++) {
            cellArray.push(<Cell size={cellSize} active={false} index={i} />);
        }
       dispatch(actions.grid.initializeGrid(cellArray));
    }, [])

    // updates cells
    useEffect(() => {
        // runs the code after 1 second
        setTimeout(() => {
            console.log('Hello, World!')
          }, 1000);

    }, [])

    // generates next cell grid
    useEffect(() => {
        // runs the code after 1 second
        setTimeout(() => {
            console.log('Hello, World!')
          }, 1000);

    }, [])

    return (
        <div style={ { height: `${boardHeight}px`, width: `${boardWidth}px`, backgroundSize: `${cellSize}px ${cellSize}px` } } className="grid">
            {currentGrid}
        </div>
    )
}


export default Grid;