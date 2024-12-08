function weatherReducer(state = {}, action) {
    console.log(action);
    if(action.type === 'SET_FORECAST') {
        return {...state, data: action.data}
    }
    return state;
};

export default weatherReducer