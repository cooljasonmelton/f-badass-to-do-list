import React, {useState} from 'react';

//styling
import './App.css';

// components
import Menu from './components/menu/Menu';
import TopicContainer from './components/topic/TopicContainer';
import ToDoContainer from './components/todo/ToDoContainer';

const App = () => {
  const [topic, setTopic] = useState({})
  console.log(topic)
  return (
    <div className="App">
      <Menu/>
      <TopicContainer setTopic={setTopic}/>
      <ToDoContainer topic={topic}/>
    </div>
  );
}

export default App;
