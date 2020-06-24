import React from 'react';

import Preset from './Preset.js';


const Presets = ({setGridPreset}) => {

    return (
        <div className="presets-container">
            <Preset name='beacon' setGridPreset={setGridPreset} />
            <Preset name='Pentadecathlon' setGridPreset={setGridPreset} />
            <Preset name='LWSS-Spaceship' setGridPreset={setGridPreset} />
            <Preset name='Generate Random' setGridPreset={setGridPreset} />
        </div>
    )
}


export default Presets;