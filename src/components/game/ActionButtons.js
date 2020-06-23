import React from 'react';
import ActionButton from './ActionButton.js';

const ActionButtons = ({ running, setRunning, runningRef, runGame }) => {

    return (
        <div className="action-btns-container">
            <ActionButton running={running} setRunning={setRunning} runningRef={runningRef} runGame={runGame} name={'Start'} />
            <ActionButton running={running} setRunning={setRunning} runningRef={runningRef} runGame={runGame} name={'Stop'} />
            <ActionButton name={'Clear'} />
        </div>
    )
}


export default ActionButtons;