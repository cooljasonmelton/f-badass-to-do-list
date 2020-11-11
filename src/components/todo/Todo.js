import React from 'react';

//styling
import './ToDo.css';

const ToDo = props => {
  const { todo } = props
  return (
    <div className="ToDo">
      <h3>{todo.name}</h3>
      <p>{todo.text}</p>
      <p>Importance: {todo.importance}</p>
    </div>
  );
}

export default ToDo;
