import React from 'react';

//styling
import './ToDo.css';

const ToDo = props => {
  const { todo } = props
  return (
    <div className="ToDo">
      <p>X</p>
      <h2>{todo.name}</h2>
      <p>{todo.text}</p>
      <p>Importance: {todo.importance}</p>
    </div>
  );
}

export default ToDo;
