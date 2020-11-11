import React from 'react';

//styling
import './ToDo.css';

const ToDo = props => {
  const { todo, getTopics, setTopic } = props

  const handleDelete = () => {
    fetch('http://localhost:3000/todos/' + todo.id, {method: 'DELETE'})
    .then(r=>r.json())
    .then(tBack => {
      getTopics(tBack)
      setTopic(tBack.filter(t => t.id === todo.topic_id)[0])
    })
  }

  return (
    <div className="ToDo">
      <div className="td-top">
        <h2>{todo.name}</h2>
        <div className="td-x cfb" onClick={handleDelete}>X</div>
      </div>
      <p>{todo.text}</p>
      <p><b>importance:</b> {todo.importance}</p>
    </div>
  );
}

export default ToDo;
