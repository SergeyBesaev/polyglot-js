import React, {useState} from 'react';
import InputForm from "./InputForm";

const Counter = () => {

    const[post, setPost] = useState(5)
    const[text, setText] = useState('Текст по умолчанию')

    function increment() {
        setPost(post +1)
    }

    function decrement() {
        if (post <= 1) {
            setPost(0)
        } else {
            setPost(post -1)
        }
    }

    return (
        <div>
            <div className="App">
                <h1>{post}</h1>
                <h1>{text}</h1>
                <input
                type='text'
                value={text}
                onChange={event => setText(event.target.value)}
                />
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <InputForm/>
        </div>
    );
};

export default Counter;
