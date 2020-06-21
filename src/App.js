import React, { useState } from 'react';
import Title from './components/Title.js';
import GameContainer from './components/game/GameContainer.js';
import About from './components/About.js';

import './scss/App.scss';

const numRows = 50;
const numCols = 50;

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows;
  });

  const clickHandler = (rowIndex, colIndex) => {
    let newGrid = grid.map((current) => current)
    newGrid[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1;
    
    setGrid(newGrid);
  }

  return (
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
  );
}

export default App;
