import React from 'react';
import ActionButton from './ActionButton.js';

const ActionButtons = () => {

    return (
        <div className="action-btns-container">
            <ActionButton name={'Start'} />
            <ActionButton name={'Stop'} />
            <ActionButton name={'Clear'} />
        </div>
    )
}


export default ActionButtons;