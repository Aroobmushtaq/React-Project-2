import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [] // Start with an empty array
};

export const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Generate a unique ID
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoslice.actions;
export default todoslice.reducer;
