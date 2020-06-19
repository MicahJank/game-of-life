const intialState = {
    currentCells: [],
    nextCells: []
}

const gridReducer = (state=intialState, action) => {
    switch (action.type) {
        case 'INIT_GRID':
            return {
                ...state,
                currentCells: action.payload
            }

        default:
            return state;
    }
}

export default gridReducer;