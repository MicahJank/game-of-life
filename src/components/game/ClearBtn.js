import React from 'react';
import { Button } from 'semantic-ui-react';


const ClearBtn = ({ running, setCurrentGrid, initializeGrid}) => {

    const action = () => {
        if (!running) {
            setCurrentGrid(initializeGrid())
          }
    }

    return (
        <Button onClick={action}>
            Clear
        </Button>
    )
}


export default ClearBtn;