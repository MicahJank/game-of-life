import React from 'react';
import Title from './components/Title.js';
import GameContainer from './components/game/GameContainer.js';
import About from './components/About.js';


import './scss/App.scss';

function App() {
 
  return (
    <>
    <div className="main">
      <Title />
      <GameContainer />
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
