import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, removeTodo } from '../feature/todo/todoslice';

function AddTodo() {
  const [input, setInput] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos || []);
  useEffect(() => {
    if (editTodoId) {
      const todoToEdit = todos.find(todo => todo.id === editTodoId);
      if (todoToEdit) {
        setInput(todoToEdit.text);
      }
    } else {
      setInput('');
    }
  }, [editTodoId, todos]);

  const addOrUpdateTodoHandler = (e) => {
    e.preventDefault();
    if (editTodoId) {
      dispatch(updateTodo({ id: editTodoId, text: input }));
      setEditTodoId(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput('');
  };

  const editTodoHandler = (id) => {
    setEditTodoId(id);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-900 rounded-lg shadow-lg">
      <form onSubmit={addOrUpdateTodoHandler} className="flex space-x-3">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out w-full"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-200"
        >
          {editTodoId ? 'Update' : 'Add'}
        </button>
      </form>

      <ul className="mt-6">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-lg mb-2">
            <span className="text-gray-300">{todo.text}</span>
            <div>
              <button
                className="text-indigo-500 hover:text-indigo-700 ml-4 transition duration-200"
                onClick={() => editTodoHandler(todo.id)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700 ml-4 transition duration-200"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodo;
