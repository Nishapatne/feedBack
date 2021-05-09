const INITIAL_STATE = {
    resultJSONArray: [],
    test: 'parth test',
};

function LoginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_LIST':
            return {
                ...state, resultJSONArray:action.addList,
            }
            default: return state;
    }
}

export default LoginReducer;