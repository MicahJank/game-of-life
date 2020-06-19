let gridSize = 25 * 25;
const intialState = {
    currentCells: Array.from({ length: gridSize }),
    nextCells: []
}

const gridReducer = (state=intialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default gridReducer;