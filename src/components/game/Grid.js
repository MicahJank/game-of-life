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
    const gameRunning = useSelector(state => state.grid.gameStart);
    const activeCells = useSelector(state => state.grid.activeCells);
    const nextGrid = useSelector(state => state.grid.nextGrid);

    const dispatch = useDispatch();

    // initializes the empty grid when the web page loads
    useEffect(() => {
        let gridSize = cellSize * cellSize;
        let cellArray = [];
    
        for (let i = 0; i < gridSize; i++) {
            cellArray.push({ index: i, active: false });
        }
       dispatch(actions.grid.initializeGrid(cellArray));
    }, [])

    useEffect(() => {
        /*
        PLAN
        First thing that needs to happen is the we need to replace the current cells in state with the next set of cells in our state

        */
        // first check if we are starting or stopping the game
        if (gameRunning) {
            dispatch(actions.grid.generateNextGrid());
        } else {

        }
        
        console.log(nextGrid);

    }, [gameRunning])

    useEffect(() => {
        // runs the code after 1 second
        setTimeout(() => {
            console.log('Hello, World!')
          }, 1000);

    }, [])

    return (
        <div style={ { height: `${boardHeight}px`, width: `${boardWidth}px`, backgroundSize: `${cellSize}px ${cellSize}px` } } className="grid">
            {
                currentGrid.map((current) => {
                    return <Cell size={cellSize} active={current.active} index={current.index} />
                })
            }
        </div>
    )
}


export default Grid;