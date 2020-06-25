import React from 'react';

import { Image, Button } from 'semantic-ui-react';


const Preset = ({ setGridPreset, name, img}) => {

    return (
        <div className="preset-container">
            <Image src={img} size='small' />
            <button onClick={() => setGridPreset(name)}>{name}</button>
        </div>
    )
}


export default Preset;