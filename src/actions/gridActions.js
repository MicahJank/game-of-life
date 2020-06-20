

// action creators
// initialize grid
const initializeGrid = (cellArray) => dispatch => {
    dispatch({ type: 'INIT_GRID', payload: cellArray });
}

const generateNextGrid = () => dispatch => {
    dispatch({ type: 'GENERATE_GRID' })

}

// updates the grid with the new grid
const updateGrid = () => dispatch => {
    
}

const toggleStart = () => dispatch => {
    dispatch({ type: 'TOGGLE_START' })
}

// called when a user clicks a cell
const addAcitveCell = (index) => dispatch => {
    dispatch({ type: 'ADD_ACTIVE_CELL', payload: index })
}

const removeCell = (index) => dispatch => {
    dispatch({ type: 'REMOVE_CELL', payload: index });
}



export default {
    updateGrid,
    generateNextGrid,
    initializeGrid,
    toggleStart,
    addAcitveCell,
    removeCell
}