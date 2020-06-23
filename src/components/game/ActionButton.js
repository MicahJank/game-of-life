import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../actions';
import { Button } from 'semantic-ui-react';


const ActionButton = ({ name, running, setRunning, runningRef, runGame }) => {

    const dispatch = useDispatch();

    const action = () => {
        if (name === "Start" || name==="Stop") {
            setRunning(!running)
            if (!running) {
                runningRef.current = true;
                runGame();
              }
        } else {
            
        }
    }

    return (
        <Button onClick={action}>
            {name}
        </Button>
    )
}


export default ActionButton;