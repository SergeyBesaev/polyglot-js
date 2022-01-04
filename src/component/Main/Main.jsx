import React, {useState} from 'react';
import "./Main.css";
import words from "../data.json"
import axios from 'axios'

const Main = () => {

    const [post, setPost] = useState([])
    const [value, setValue] = useState([])

    async function phraseMethod() {
    const getPhrase = await axios.get('http://localhost:8099/api/lessons/lesson-1')
        setPost(getPhrase.data)
        setValue('')
    }

    function phraseCompare(value, post) {
        if (value === post.engForm) {
            return phraseMethod;
        }
    }


    return (
        <div className="Main-site">
            <p>{post.engForm}</p>
            <p>{post.rusForm}</p>
            <p>{value}</p>
            <input
                placeholder='текст заглушка'
                onChange={event => setValue(event.target.value)}
            />
            <button onClick={phraseCompare(value, post)}>Проверить</button>
            <button onClick={phraseMethod}>Получить новую фразу</button>
        </div>
    );
};

export default Main;
