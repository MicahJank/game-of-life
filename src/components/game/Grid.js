import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import produce from 'immer';

import Cell from './Cell.js';

import '../../scss/Grid.scss';

 // height of the board can be determined by the size of each cell since i know that we need a 25 by 25 cell grid
const numCols = 25;
const numRows = 25;


// creates the initialGrid the user sees
const initializeGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows;
}

const Grid = () => {
    const [currentGrid, setCurrentGrid] = useState(initializeGrid());
    const [nextGrid, setNextGrid] = useState(initializeGrid());  

    const clickFunction = (rowIndex, colIndex) => {
        const newGrid = produce(currentGrid, copyGrid => {
            copyGrid[rowIndex][colIndex] = currentGrid[rowIndex][colIndex] ? 0 : 1;
        });

        setCurrentGrid(newGrid);
    }

    return (
        <div style={
            { display: 'grid',
              gridTemplateColumns: `repeat(${numCols}, 20px)`
            }} 
            className="grid">
                {currentGrid.map((rows, i) =>
                    rows.map((cols, k) => {
                        return <Cell styles={{
                            width: 20,
                            height: 20,
                            backgroundColor: currentGrid[i][k] ? 'black' : undefined,
                            border: '1px solid black'
                        }} clickFunction={clickFunction} 
                            key={`${i}-${k}`} row={i} col={k} 
                            currentGrid={currentGrid} />
                    })
                )}
        </div>
    )
}


export default Grid;