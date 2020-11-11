import React from 'react';

//styling
import './ToDo.css';

// components
import ToDo from './ToDo'
import NewToDoContainer from '../todonew/NewToDoContainer';


const ToDoContainer = props => {
    const { topic, topics, getTopics, setTopic } = props

    return (
        <div className="ToDoContainer">
            <div className="todo-c">
                {topic.todos && topic.todos.map(todo => {
                    return <ToDo key={`todo-${todo.id}`} todo={todo} getTopics={getTopics} setTopic={setTopic}/>
                })}
            </div>
            <NewToDoContainer getTopics={getTopics} topics={topics} setTopic={setTopic}/>
        </div>
    );
}

export default ToDoContainer;
