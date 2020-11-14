import React from 'react';

//styling
import './Topic.css';

//components 
import Topic from './Topic';

const TopicContainer = props => {
    const { topics, setTopic } = props

    const getAllToDos = () => {
        const topicArr = []
        topics.forEach(topic => topicArr.push(...topic.todos)) 
        return topicArr
    }

    const allTopics = {
        id: 0, 
        name: "All", 
        todos: getAllToDos()
    }

    return (
        <div className="TopicContainer">
            {topics.map(topic => {
                return (
                    <Topic key={`topic-${topic.id}`}
                    topic={topic} 
                    setTopic={setTopic}/>)})}
            <Topic topic={allTopics} setTopic={setTopic}/>
        </div>
    );
}

export default TopicContainer;
