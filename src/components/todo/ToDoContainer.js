import React from 'react';

//styling
import './ToDo.css';

// components
import ToDo from './ToDo'
import NewToDoContainer from '../todonew/NewToDoContainer';


const ToDoContainer = props => {
    const { topic } = props

    return (
        <div className="ToDoContainer">
            <div className="todo-c">
                {topic.todos && topic.todos.map(todo => {
                    return <ToDo key={`todo-${todo.id}`} todo={todo} />
                })}
            </div>
            <NewToDoContainer/>
            
        </div>
    );
}

export default ToDoContainer;
