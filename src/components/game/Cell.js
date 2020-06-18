import React, { useState, useEffect } from 'react';


const Cell = ({ size, active }) => {

    const [cellActive, setCellActive] = useState(false);

    const cellStyles = { 
        width: size, 
        height: size, 
        // backgroundColor: cellActive ? `black` : `` 
    }

    return (
        <button onClick={() => setCellActive(!cellActive)} style={cellStyles} className={`cell-block ${cellActive ? 'active' : ''}`}>

        </button>
    )
}

export default Cell;