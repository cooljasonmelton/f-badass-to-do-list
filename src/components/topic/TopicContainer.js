import React, {useEffect, useState} from 'react';

//styling
import './Topic.css';

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
                return(
                    <button key={`topic-${topic.id}`}
                        onClick={()=>setTopic(topic)}> 
                        {topic.name} 
                    </button>
                ) 
            })}
        </div>
    );
}

export default TopicContainer;
