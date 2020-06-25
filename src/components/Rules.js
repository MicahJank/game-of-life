import React from 'react';
import { List } from 'semantic-ui-react';


const Rules = () => {

    return (
        <div className="rules-container">
            <h2>Rules</h2>
            <List as='ul'>
                <List.Item as='li'>If the cell is alive and has 2 or 3 cells next to it that are alive also, it gets to remain alive, otherwise it dies.</List.Item>
                <List.Item as='li'>If the cell is dead and it has exactly 3 alive cells next to it, the cell becomes alive, otherwise it stays dead.</List.Item>
            </List>
        </div>
    )
}


export default Rules;