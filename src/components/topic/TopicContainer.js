import React from 'react';

//styling
import './Topic.css';

//components 
import Topic from './Topic';

const TopicContainer = props => {
    const { topics, setTopic } = props

    return (
        <div className="TopicContainer">
            {topics.map(topic => {
                return (
                    <Topic key={`topic-${topic.id}`}
                        topic={topic} 
                        setTopic={setTopic}/>)})}
        </div>
    );
}

export default TopicContainer;
