

// action creators
// initialize grid
const initializeGrid = (cellArray) => dispatch => {
    dispatch({ type: 'INIT_GRID', payload: cellArray });
}

const generateNextGrid =() => dispatch => {

}

// updates the grid with the new grid
const updateGrid = () => dispatch => {
    
}


export default {
    updateGrid,
    generateNextGrid,
    initializeGrid
}