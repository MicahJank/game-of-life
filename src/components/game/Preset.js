import React from 'react';
import placeholder from '../../imgs/placeholder.png';

import { Image, Button } from 'semantic-ui-react';


const Preset = ({ setGridPreset, name}) => {

    return (
        <div className="preset-container">
            <Image src={placeholder} size='small' />
            <button onClick={() => setGridPreset(name)}>{name}</button>
        </div>
    )
}


export default Preset;