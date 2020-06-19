import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';


const Cell = ({ size, active, index }) => {
    const nextGrid = useSelector(state => state.grid.nextCells);
    const dispatch = useDispatch();


    const [cellActive, setCellActive] = useState(active);

    const cellStyles = { 
        width: size, 
        height: size, 
    }

    const clickCell = () => {
        
        if (cellActive === true) {
            dispatch(actions.grid.removeCell(index));
        } else {
            dispatch(actions.grid.addAcitveCell(index)); 
        }

        setCellActive(!cellActive)
    }

    return (
        <button onClick={clickCell} style={cellStyles} className={`cell-block ${cellActive ? 'active' : ''}`}>

        </button>
    )
}

export default Cell;