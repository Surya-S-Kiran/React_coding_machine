// import { react } from 'react';
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        filter: "all",
        sortOrder: "newest",
    },
    reducers: {
        addTodo: (state,action) => {
         state.items.unshift({
          id: Date.now(),
          text: action.payload,
          completed: false, 
         });
        },
        toggleTodo: (state,action) => {
           const todo =  state.items.find((item) => item.id === action.payload);
           if (todo) todo.completed = !todo.completed;
        },
        deleteTodo: (state, action) => {
           state.items = state.items.filter((item) => item.id !== action.payload);
        },
        setFilter: (state, action) => {
         state.filter = action.payload;
        },
        setSortOrder: (state, action) => {
         state.sortOrder = action.payload;
        }
    }
});

export const {
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    setSortOrder,
} = todoSlice.actions;

export default todoSlice.reducer;



