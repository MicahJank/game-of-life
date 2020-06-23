import React, { useState, useCallback, useRef } from 'react';
import Title from './components/Title.js';
import GameContainer from './components/game/GameContainer.js';
import About from './components/About.js';

import produce from 'immer';

import './scss/App.scss';

const numRows = 50;
const numCols = 50;

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

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows;
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;
  

  const clickHandler = (rowIndex, colIndex) => {
    const newGrid = produce(grid, gridCopy => {
      gridCopy[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1;
    });
    setGrid(newGrid);
  }

  // useCallback makes it so the function is only created once
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;

            operations.forEach(([x,y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }

          }
        }
      })
    })

    setTimeout(runSimulation, 1000);
  }, [])

  return (
    <>
    <div className="main">
      <Title />
      <GameContainer />
      <About />
    </div>
    </>
  );
}

export default App;
