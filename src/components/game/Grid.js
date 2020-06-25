import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

import Cell from './Cell.js';
import ToggleGameBtn from './ToggleGameBtn.js';

import '../../scss/Grid.scss';
import ClearBtn from './ClearBtn';
import TimeSlider from './TimeSlider.js';
import Presets from './Presets.js';
import Rules from '../Rules.js';

 // height of the board can be determined by the size of each cell since i know that we need a 25 by 25 cell grid
const numCols = 50;
const numRows = 25;

// operations
// this will make it easier for me to determine the neighbors of an 'alive' cell
// where [0,0] is the alive cell we are checking
const operations = [
    [0,1], // right of alive cell
    [0,-1], // left of alive cell
    [1,-1], // bottom left diagonal of alive cell
    [-1,1], // top right diagonal of alive cell
    [1,1], // bottom right diagonal of alive cell
    [-1,-1], // top left diagonal of alive cell
    [1,0], // bottom of alive cell
    [-1,0], // top of alive cell
  ]


// creates the initialGrid the user sees
const initializeGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows;
}

// creates a grid with random values alive
const generateRandom = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => Math.random() > 0.7 ? 1: 0))
    }
    return rows;
}

const Grid = ({ setGeneration }) => {
    const [currentGrid, setCurrentGrid] = useState(initializeGrid());
    
    // i am using the speed in the useCallback hook - therefore i will need to make a ref of it so the speed can update properly
    const [speed, setSpeed] = useState(1000); // speed is in ms
    const speedRef = useRef(speed);
    speedRef.current = speed;

    // determines if the game simulation is running or not
    const [running, setRunning] = useState(false);    
    const runningRef = useRef(running);
    runningRef.current = running;
  

    const clickFunction = (rowIndex, colIndex) => {
        const newGrid = produce(currentGrid, copyGrid => {
            copyGrid[rowIndex][colIndex] = currentGrid[rowIndex][colIndex] ? 0 : 1;
        });

        setCurrentGrid(newGrid);
    }

    const setGridPreset = (preset) => {
        let grid = initializeGrid();

        switch(preset) {
            case 'beacon':
                grid[11][11] = 1;
                grid[11][12] = 1;
                grid[12][11] = 1;
                grid[12][12] = 1;
                grid[13][13] = 1;
                grid[14][13] = 1;
                grid[13][14] = 1;
                grid[14][14] = 1;
                break;

            case 'Pentadecathlon':
                grid[8][11] = 1;
                grid[9][11] = 1;
                grid[10][11] = 1;
                grid[11][11] = 1;
                grid[12][11] = 1;
                grid[13][11] = 1;
                grid[14][11] = 1;
                grid[15][11] = 1;

                grid[8][12] = 1;
                grid[10][12] = 1;
                grid[11][12] = 1;
                grid[12][12] = 1;
                grid[13][12] = 1;
                grid[15][12] = 1;

                grid[8][13] = 1;
                grid[9][13] = 1;
                grid[10][13] = 1;
                grid[11][13] = 1;
                grid[12][13] = 1;
                grid[13][13] = 1;
                grid[14][13] = 1;
                grid[15][13] = 1;
                break;

            case 'LWSS-Spaceship':
                grid[4][3] = 1;
                grid[5][3] = 1;

                grid[3][4] = 1;
                grid[4][4] = 1;
                grid[5][4] = 1;

                grid[3][5] = 1;
                grid[4][5] = 1;
                grid[6][5] = 1;

                grid[4][6] = 1;
                grid[5][6] = 1;
                grid[6][6] = 1;

                grid[5][7] = 1;
                break;

            case 'Generate Random':
                grid = generateRandom();
                break;
                
            default:
                return grid;
        }

        setCurrentGrid(grid);
    }

    // useCallback will return a memoised version of the function - i.e. should speed up the application since it will
    // be using recursion
    const runGame = useCallback(() => {
        // the conditions that breaks the recursion loop
        if(!runningRef.current) {
            return;
        }
  
        // grid is the current value of the grid
        // since i am mapping over it the returned result is a copy of the original and doesnt mutate the original
        setCurrentGrid((grid) => {
            return grid.map((rowValue, rowIndex) => {
                // nested arrays inside grid so i need to map again to make sure the nested arrays are copied as well
                return rowValue.map((colValue, colIndex) => { 
                    let neighbors = 0;

                    operations.forEach(([x,y]) => {
                        const newRowIndex = rowIndex + x;
                        const newColIndex = colIndex + y;
    
                        if (newRowIndex >= 0 && newRowIndex < numRows && newColIndex >= 0 && newColIndex < numCols) {
                            // current is the current grid the user sees 
                            // so our neighbors should be based on that
                            neighbors += grid[newRowIndex][newColIndex]; 
                        }
                    });
                    
                    // gridCopy is the grid that we can manipulate while the 'grid' is being displayed to the user
                    if ((grid[rowIndex][colIndex] === 1 && neighbors < 2) || (grid[rowIndex][colIndex] === 1 && neighbors > 3)) {
                        return 0;
                    } else if (grid[rowIndex][colIndex] === 0 && neighbors === 3) {
                        return 1;
                    } else {
                        return colValue; 
                    }

                })
            })
        });


        setGeneration((prevGen) => {
            const next = prevGen + 1;
            return next;
        })

        // re-run the function after x ms
        setTimeout(runGame, speedRef.current);
    }, [])

    return (
        <>
        <div className='grid-rules'>
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
                                backgroundColor: currentGrid[i][k] ? 'white' : undefined,
                            }} clickFunction={clickFunction} 
                                key={`${i}-${k}`} row={i} col={k} 
                                currentGrid={currentGrid}
                                gameRunning={running} />
                        })
                    )}

                <div className='action-btns-container'>
                    <ToggleGameBtn running={running} setRunning={setRunning} runningRef={runningRef} runGame={runGame} />
                    <ClearBtn setGeneration={setGeneration} setCurrentGrid={setCurrentGrid} initializeGrid={initializeGrid} running={running} />
                    <TimeSlider speed={speed} setSpeed={setSpeed} />
                </div>
            </div>
            <Rules />
        </div>
        <Presets setGridPreset={setGridPreset} />
        </>
    )
}


export default Grid;