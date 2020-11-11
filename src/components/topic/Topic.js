import React from 'react';

//styling
import './Topic.css';

const Topic = props => {
    const { topic, setTopic } = props
    return (
        <div className="Topic"
            onClick={()=>setTopic(topic)}> 
            <h3>{topic.name} <span class='notbold'>{" (" + topic.todos.length +")"}</span></h3>
        </div>
    );
}

export default Topic;
