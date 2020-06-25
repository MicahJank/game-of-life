import React from 'react';
import { Button } from 'semantic-ui-react';


const ToggleGameBtn = ({ running, setRunning, runningRef, runGame }) => {

    const action = () => {
        setRunning(!running)
        if (!running) {
            runningRef.current = true;
            runGame();
          }
    }

    return (
        <Button onClick={action}>
            {running ? 'Stop' : 'Start'}
        </Button>
    )
}


export default ToggleGameBtn;