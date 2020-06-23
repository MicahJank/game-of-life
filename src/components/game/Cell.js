import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';


const Cell = ({ clickFunction, key, row, col, currentGrid, styles }) => {
    // const [cellStyles, setCellStyles] = useState({
    //     width: 20,
    //     height: 20,
    //     backgroundColor: currentGrid[row][col] ? 'black' : undefined,
    //     border: '1px solid black'
    // })

    return (
        <button onClick={() => clickFunction(row, col)} style={styles}>

        </button>
    )
}

export default Cell;