const ADD_LIST = 'ADD_LIST';
// const DELETE_TODO = 'DELETE_TODO';

export const fetchProductsSuccess = (addList) => ({
    type:ADD_LIST,
    addList,
});

// export const deleteTodo = (id) => ({
//     type: DELETE_TODO,
//     id
// });