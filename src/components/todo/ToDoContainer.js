import React from 'react';

//styling
import './ToDo.css';

const ToDoContainer = props => {
    const { topic } = props

    return (
        <div className="ToDoContainer">
            {topic.todos && topic.todos.map(todo => {
                return (
                    <div key={`todo-${todo.id}`}>{todo.name} </div>
                )
            })}
        </div>
    );
}

export default ToDoContainer;
