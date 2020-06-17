import React from 'react';
import placeholder from '../../imgs/placeholder.png';

import { Image, Button } from 'semantic-ui-react';


const Preset = () => {

    return (
        <div className="preset-container">
            <Image src={placeholder} size='small' fluid/>
            <Button>Preset</Button>
        </div>
    )
}


export default Preset;