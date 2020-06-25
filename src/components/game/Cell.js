import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';


const Cell = ({ clickFunction, key, row, col, currentGrid, styles, gameRunning }) => {
    // const [cellStyles, setCellStyles] = useState({
    //     width: 20,
    //     height: 20,
    //     backgroundColor: currentGrid[row][col] ? 'black' : undefined,
    //     border: '1px solid black'
    // })

    const toggleCell = () => {
        if (!gameRunning) {
            clickFunction(row, col)
        }
    }

    return (
        <button className='cell' onClick={toggleCell} style={styles}>

        </button>
    )
}

export default Cell;