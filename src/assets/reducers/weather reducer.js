function weatherReducer(state = {}, action) {

    if(action.type === 'SET_FORECAST') {
        return {...action.data}
    }
    return state;
};

export default weatherReducer