import React, {useState} from 'react';

//styling
import './NewToDo.css';

// components

const NewToDoContainer = props => {
    const { topic, topics, getTopics, setTopic } = props;
    const [fTopic, setFTopic] = useState(1)
    const [toDo, setToDo] = useState("")
    const [details, setDetails] = useState("")
    const [importance, setImportance] = useState(1)

    const reqObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            topicId: fTopic,
            name: toDo,
            text: details,
            importance: importance
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch('http://localhost:3000/todos', reqObj)
        .then(r=>r.json())
        .then(tBack => {
            getTopics(tBack)
            setTopic(tBack.filter(t => t.id === fTopic)[0])
            // reset form
            setToDo("")
            setDetails("")
            setImportance(1)        
        })
    }

    return (
        <form className="NewToDoContainer" onSubmit={handleSubmit}>
            <h2>Create To Do</h2>
            <label>
                topic:
                <br/>
                <select value={fTopic} onChange={e=>setFTopic(parseInt(e.target.value))}>
                    {topics.map(tpc => <option key={`s-${tpc.id}`} value={tpc.id}>{tpc.name}</option>)}
                </select>
            </label>
            <label>
                to do:
                <br/>
                <textarea type="text" name="name" value={toDo} onChange={e => setToDo(e.target.value)} />
            </label>
            <label>
                details:
                <br/>
                <textarea type="text" name="text" value={details} onChange={e => setDetails(e.target.value)}/>
            </label>
            <label>
                importance: 
                <select value={importance} onChange={e=>setImportance(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </label>
            <input className="sub-but" type="submit" value="create" />
        </form>
    );
}

export default NewToDoContainer;
