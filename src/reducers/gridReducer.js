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
                activeCells: [...state.activeCells, {...state.currentCells[action.payload], active: true}]
            }

        case 'REMOVE_CELL':
            return {
                ...state,
                activeCells: state.activeCells.filter(current => current.props.index !== action.payload)
            }

        case 'GENERATE_GRID':
            // compares the activeCells with the currentCells and makes a new grid with the active cells
            const nextGrid = state.currentCells.map((currentCell) => {
                for (let i = 0; i < state.activeCells.length; i++) {
                    if(state.activeCells[i].index === currentCell.index) {
                        return state.activeCells[i];
                    }
                }
                return currentCell;
            })
            return {
                ...state,
                nextGrid: nextGrid
            }

        default:
            return state;
    }
}

export default gridReducer;