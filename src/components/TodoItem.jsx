import React from 'react';

function TodoItem({ todo }) {
  return (
    <div>
      <p>{todo.title}</p>
    </div>
  );
}

export default TodoItem;
