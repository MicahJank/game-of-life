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
    // let newGrid = grid.map((current) => current)
    // newGrid[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1;
    
    // setGrid(newGrid);
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
    
    // setGrid(g => {
    //   let newGrid = grid.map((current) => [...current]);
      
    //   for (let i = 0; i < numRows; i++) { // i is 7
    //     for (let k = 0; k < numCols; k++) {  // k is 20
    //       let neighbors = 0;
          
    //       operations.forEach(([x,y]) => {
    //         const newI = i + x; // 6
    //         const newK = k + y; // 19
  
    //         // calculates the number of neighbors the current cell we are checking has
    //         // note it only adds alive neighbors since g[newI][newK] will either return a 0 or 1 depending on its state
    //         if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
    //           neighbors += grid[newI][newK];
    //           // console.log(neighbors)
    //         }
    //       })
  
    //       // begin implementing the rules for the game of life
    //       // any cell with less than 2 or greater than 3 dies - under population and overpopulation
    //       if (neighbors < 2 || neighbors > 3) {
    //         // console.log('cell is now dead at: ', [i,k])
    //         newGrid[i][k] = 0
    //       } 
    //       // any dead cell with exactly 3 neighbors should become alive
    //       else if(grid[i][k] === 0 && neighbors === 3) {
    //         console.log('cell is now alive at: ', [i,k])
    //         operations.forEach(([x,y]) => {
    //           if(grid[i+x][k+y]) {
    //             console.log([i+x],[k+y]);
    //           }
    //         })
    //         newGrid[i][k] = 1;
    //       }
    //     }
    //   }
    //   return newGrid;
    // })

    setTimeout(runSimulation, 1000);
  }, [])

  return (
    <>
    <button onClick={() => {
      setRunning(!running)

      if (!running) {
        runningRef.current = true;
        runSimulation();
      }
    }}>{running ? 'Stop' : 'Start'}</button>
    <div className="main"
      style={
        { display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => {
          return <div
          onClick={() => clickHandler(i, k)}
          key={`${i}-${k}`} 
          style={{ width: 20, height: 20, 
            backgroundColor: grid[i][k] ? 'pink' : undefined,
            border: 'solid 1px black'
          }} />
        }) 
      )}
    </div>
    </>
  );
}

export default App;
