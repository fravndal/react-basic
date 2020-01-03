import React, { useState } from 'react';
import Header from './Header';

const Todo = () => {
    const [list, setList] = useState([
        { text: "hei" },
        { text: "heeeii" }]);

    const [todo, setTodo] = useState("");

    const createNewTodoItem = () => {
        const newTodo = { text: todo };
        setList([...list, newTodo]);
        setTodo("");
    };

    const handleInput = (e) => {
        setTodo(e.target.value);
    };

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            createNewTodoItem();
        }
    };



    return (
        <React.Fragment>
            <Header />
            <div class="container">
                <h1>Simple todo list</h1>
                <div>
                    {list.map((item) => {
                        return <p>{item.text}</p>;
                    })}
                </div>
                <input type="text" value={todo} onChange={handleInput} onKeyPress={handleEnterKey} />
                <button onClick={createNewTodoItem}>
                    +
            </button>

            </div>
        </React.Fragment>

    );

};

export default Todo;