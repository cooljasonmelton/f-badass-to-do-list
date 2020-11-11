import React, {useEffect, useState} from 'react';

//styling
import './Topic.css';

const TopicContainer = () => {
    const [topics, setTopics] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/topics")
        .then(r=>r.json())
        .then(topics => setTopics(topics))
    }, []);


    return (
        <div className="TopicContainer">
            {topics.map(topic => {
                return <div key={`topic-${topic.id}`}> {topic.name} </div>
            })}
        </div>
    );
}

export default TopicContainer;
