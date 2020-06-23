import React from 'react';
import { Button } from 'semantic-ui-react';


const ClearBtn = ({ setGeneration, running, setCurrentGrid, initializeGrid}) => {

    const action = () => {
        if (!running) {
            setCurrentGrid(initializeGrid())
            setGeneration(0);
          }
    }

    return (
        <Button onClick={action}>
            Clear
        </Button>
    )
}


export default ClearBtn;