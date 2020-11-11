import React, {useState} from 'react';

//styling
import './NewToDo.css';

// components

const NewToDoContainer = props => {
    const { topics } = props;
    const [fTopic, setFTopic] = useState(1)
    const [toDo, setToDo] = useState("")
    const [details, setDetails] = useState("")
    const [importance, setImportance] = useState(1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <form className="NewToDoContainer" onSubmit={handleSubmit}>
            <h1>Create To Do</h1>
            <label>
                topic:
                <br/>
                <select value={fTopic} onChange={e=>setFTopic(e.target.value)}>
                    {topics.map(tpc => <option key={`s-${tpc.id}`} value={tpc.id}>{tpc.name}</option>)}
                </select>
            </label>
            <label>
                to do:
                <br/>
                <input type="text" name="name" value={toDo} onChange={e => setToDo(e.target.value)} />
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
