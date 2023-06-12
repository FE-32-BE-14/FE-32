import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { GlobalContext } from '../Contexts/GlobalContext';

function TodoList() {
  const { todos } = useContext(GlobalContext);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
