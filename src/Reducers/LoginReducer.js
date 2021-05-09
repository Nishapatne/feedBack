const INITIAL_STATE = {
    resultArray: [],
    newListArray: [],
};

function LoginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_LIST':
            return {
                ...state,
                resultArray:action.addList,
            }
            default: return state;
        case 'ADD_NEW_LIST':
            return{
                ...state, 
                resultArray: [...state.resultArray, action.newList]
            }
    }
}

export default LoginReducer;
// resultArray:action.addList,
// resultArray: [...state.resultArray, action.addList]