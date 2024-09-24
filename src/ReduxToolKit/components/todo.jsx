import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../feature/todo/todoslice';

function TodoList() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <button onClick={() => dispatch(removeTodo(todo.id))}></button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
