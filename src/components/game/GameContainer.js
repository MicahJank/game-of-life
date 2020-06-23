import React, { useState } from 'react';
import Grid from './Grid.js';
import Presets from './Presets.js';
import ActionButtons from './ActionButtons.js';
import Rules from '../Rules.js';

import '../../scss/GameContainer.scss';

import { Container, Header } from 'semantic-ui-react';

const GameContainer = () => {

    return (
        <Container className="game-container">
            <div className="grid-presets-container">
                <Header as='h2'>Generation: # </Header>
                <div className="grid-presets">
                    <Grid />
                    <Presets />

                </div>
                {/* <ActionButtons /> */}
            </div>
                <Rules />
        </Container>
    )
}

export default GameContainer;