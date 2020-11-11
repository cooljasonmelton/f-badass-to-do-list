import React from 'react';

//styling
import './NewToDo.css';

// components

const NewToDoContainer = props => {
    const { topics } = props


    return (
        <form className="NewToDoContainer">
            <h2>New To Do</h2>
            <label>
                Topic:
                <select>
                    {topics.map(tpc => <option key={`s-${tpc.id}`} value={tpc.name}>{tpc.name}</option>)}
                </select>
            </label>
            <label>
                To Do:
                <br/>
                <input type="text" name="name" />
            </label>
            <label>
                Details:
                <br/>
                <textarea type="text" name="text" />
            </label>
            <label>
                Importance: 
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <input className="sub-but" type="submit" value="Create" />
        </form>
    );
}

export default NewToDoContainer;
