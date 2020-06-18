import React, { useState, useEffect } from 'react';


const Cell = ({ size, active }) => {

    const [cellActive, setCellActive] = useState(active);

    const cellStyles = { 
        width: size, 
        height: size, 
    }

    return (
        <button onClick={() => setCellActive(!cellActive)} style={cellStyles} className={`cell-block ${cellActive ? 'active' : ''}`}>

        </button>
    )
}

export default Cell;