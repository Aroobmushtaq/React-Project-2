// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/todo/todoslice';

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Use a key for the reducer
    },
});
