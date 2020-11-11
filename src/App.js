import React from 'react';

//styling
import './App.css';

// components
import Menu from './components/menu/Menu';
import TopicContainer from './components/topic/TopicContainer';
import ToDoContainer from './components/todo/ToDoContainer';

const App = () => {
  return (
    <div className="App">
      <Menu/>
      <TopicContainer/>
      <ToDoContainer/>

    </div>
  );
}

export default App;
