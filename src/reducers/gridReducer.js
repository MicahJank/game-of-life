const intialState = {
    currentCells: [],
    nextGrid: [],
    activeCells: [],
    gameStart: false,
}

const gridReducer = (state=intialState, action) => {
    switch (action.type) {
        case 'INIT_GRID':
            return {
                ...state,
                currentCells: action.payload,
                nextGrid: action.payload
            }

        case 'TOGGLE_START':
            return {
                ...state,
                gameStart: !state.gameStart
            }

        case 'ADD_ACTIVE_CELL':
            return {
                ...state,
                activeCells: [...state.activeCells, state.currentCells[action.payload]]
            }

        case 'REMOVE_CELL':
            return {
                ...state,
                activeCells: state.activeCells.filter(current => current.props.index !== action.payload)
            }

        default:
            return state;
    }
}

export default gridReducer;