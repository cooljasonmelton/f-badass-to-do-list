import React from 'react';

//styling
import './ToDo.css';

// components
import ToDo from './ToDo'

const ToDoContainer = props => {
    const { topic } = props

    return (
        <div className="ToDoContainer">
            {topic.todos && topic.todos.map(todo => {
                return <ToDo key={`todo-${todo.id}`} todo={todo} />
            })}
        </div>
    );
}

export default ToDoContainer;
