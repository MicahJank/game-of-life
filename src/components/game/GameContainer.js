import React, { useState } from 'react';
import Grid from './Grid.js';
import Presets from './Presets.js';
import Rules from '../Rules.js';

import '../../scss/GameContainer.scss';

import { Container, Header } from 'semantic-ui-react';


const GameContainer = () => {

    // keeps track of the current loop/generation the game is in
    const [generation, setGeneration] = useState(0);

    return (
        <Container className="game-container">
            <div className="grid-presets-container">
                <div className="grid-presets">
                    <Header className='generation' as='h2'>Generation: #{generation} </Header>
                    <Grid setGeneration={setGeneration} />

                </div>
            </div>
        </Container>
    )
}

export default GameContainer;