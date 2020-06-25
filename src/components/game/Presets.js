import React from 'react';

import Preset from './Preset.js';
import beaconImg from '../../imgs/Beacon.png'
import pentaImg from '../../imgs/Pentadecalthlon.png'
import randomImg from '../../imgs/random.png'
import spaceshipImg from '../../imgs/spaceship.png'


const Presets = ({setGridPreset}) => {

    return (
        <div className="presets-container">
            <Preset name='beacon' setGridPreset={setGridPreset} img={beaconImg} />
            <Preset name='Pentadecathlon' setGridPreset={setGridPreset} img={pentaImg} />
            <Preset name='LWSS-Spaceship' setGridPreset={setGridPreset} img={spaceshipImg} />
            <Preset name='Generate Random' setGridPreset={setGridPreset} img={randomImg} />
        </div>
    )
}


export default Presets;