const searchReducer =  (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.results;
        default:
            return state
    }
}

export default searchReducer;