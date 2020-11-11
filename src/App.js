import React, {useEffect, useState} from 'react';

//styling
import './App.css';

// components
import Menu from './components/menu/Menu';
import TopicContainer from './components/topic/TopicContainer';
import ToDoContainer from './components/todo/ToDoContainer';


const App = () => {
  const [topic, setTopic] = useState({})
  const [topics, getTopics] = useState([])

  useEffect(()=> {
      fetch("http://localhost:3000/topics")
      .then(r=>r.json())
      .then(topics => {
          getTopics(topics)
          setTopic(topics[0])
      })
  }, [setTopic]);

  return (
    <div className="App">
      <Menu/>
      <TopicContainer topics={topics} setTopic={setTopic}/>
      <ToDoContainer topic={topic} topics={topics}/>
    </div>
  );
}

export default App;
