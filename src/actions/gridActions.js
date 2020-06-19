


// action creators

// initialize grid
const initializeGrid = (cellJSX, size) => dispatch => {
    const gridSize = size * size;
    let cellArray = [];

    for (let i = 0; i < gridSize; i++) {
        cellArray.push(cellJSX);
    }

    dispatch({ type: 'INIT_GRID', payload: cellArray });
}

// updates the grid with the new grid
const updateGrid = () => dispatch => {
    
}

const generateNextGrid =() => dispatch => {

}

export default {
    updateGrid,
    generateNextGrid,
    initializeGrid
}