import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../actions';
import { Button } from 'semantic-ui-react';


const ActionButton = ({ name }) => {

    const dispatch = useDispatch();

    const action = () => {
        if (name === "Start" || name==="Stop") {
            dispatch(actions.grid.toggleStart());
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