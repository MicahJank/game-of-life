import React from 'react';
import Grid from './Grid.js';
import Presets from './Presets.js';
import ActionButtons from './ActionButtons.js';

const GameContainer = () => {

    return (
        <section>
            <h2>Generation: # </h2>
            <div>
                <Grid />
                <Presets />
            </div>
            <ActionButtons />
        </section>
    )
}

return GameContainer;