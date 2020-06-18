import React, { useState, useEffect } from 'react';


const Cell = ({ size, active }) => {

    return (
        <button style={{ width: size, height: size, backgroundColor: active ? `black` : `` }} className="cell-block">

        </button>
    )
}

export default Cell;