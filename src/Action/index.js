const ADD_LIST = 'ADD_LIST';
const ADD_NEW_LIST = 'ADD_NEW_LIST';

export const fetchProductsSuccess = (addList) => ({
    type:ADD_LIST,
    addList,
});

export const employeeList = (newList) => ({
    type: ADD_NEW_LIST,
    newList,
});