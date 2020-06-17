import React from 'react';
import Grid from './Grid.js';
import Presets from './Presets.js';
import ActionButtons from './ActionButtons.js';
import Rules from '../Rules.js';

import { Container, Header } from 'semantic-ui-react';

const GameContainer = () => {

    return (
        <Container>
            <Header as='h2'>Generation: # </Header>
            <div className="grid-presets-container">
                <Grid />
                <Presets />
                <Rules />
            </div>
            <ActionButtons />
        </Container>
    )
}

export default GameContainer;