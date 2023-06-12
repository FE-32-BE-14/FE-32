
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <GlobalContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </GlobalContext.Provider>
  );
};
