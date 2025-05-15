import React, { useState, useEffect } from 'react';
import './todolist.css';

function Todolist() {
    const [list, setList] = useState(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : ["learning react", "reading blogs", "need to build something"];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(list));
    }, [list]);

    const handleinp = (event) => {
        event.preventDefault();
        const val = event.target[0].value.trim();
        if (val) {
            setList([...list, val]);
            event.target[0].value = '';
        }
    };

    const handledel = (ind) => {
        const newlist = [...list];
        newlist.splice(ind, 1);
        setList(newlist);
    };

    const handleupd = (ind) => {
        const inp1 = prompt("Enter updated task:");
        if (inp1 && inp1.trim() !== '') {
            const newlist = [...list];
            newlist[ind] = inp1.trim();
            setList(newlist);
        }
    };

    return (
        <div className="todo-container">
            <h1 className="heading">✨ Todo List ✨</h1>
            <form className="form" onSubmit={handleinp}>
                <input className="input" type="text" placeholder="Add a new task..." />
                <button className="submit-btn" type="submit">Add</button>
            </form>

            <div className="todo-list">
                {list.map((val, ind) => (
                    <div key={ind} className="todo-item">
                        <span className="task">{val}</span>
                        <div className="btn-group">
                            <button className="btn delete" onClick={() => handledel(ind)}>Delete</button>
                            <button className="btn update" onClick={() => handleupd(ind)}>Update</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todolist;
