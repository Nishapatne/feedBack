const ADD_TITLE = 'ADD_TITLE';
const DELETE_TODO = 'DELETE_TODO';

export const addTodoList = (todoList) => ({
    type:ADD_TITLE,
    todoList,
    id: Date.now()
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});