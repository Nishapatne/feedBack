const INITIAL_STATE = {
    todoList: [],
};

function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TITLE':
            return {
                ...state, todoList: [
                    ...state.todoList, {
                        todoList: action.todoList,
                        id: action.id
                    }
                ]
            }
        case 'DELETE_TODO':
            const todoReducer = state.todoList.filter((todo) => todo.id !== action.id)
            return {
                ...state,
                todoList: todoReducer,
            }
        default: return state;


    }
}

export default todoReducer;

