const intialState = {
    currentCells: [],
    nextCells: [],
    gameStart: false,
    gamePause: false
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