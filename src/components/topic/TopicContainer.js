import React, {useEffect, useState} from 'react';

//styling
import './Topic.css';

//components 
import Topic from './Topic';

const TopicContainer = props => {
    const { setTopic } = props
    const [topics, getTopics] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/topics")
        .then(r=>r.json())
        .then(topics => getTopics(topics))
    }, []);


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
