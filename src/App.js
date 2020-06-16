import React from 'react';
import Title from './components/Title.js';
import GameContainer from './components/game/GameContainer.js';
import Rules from './components/Rules.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
     <Title />
     <GameContainer />
     <Rules />
     <About />
    </div>
  );
}

export default App;
