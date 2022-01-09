import React, {useState} from 'react';
import "./Lesson1.css";
import axios from 'axios'

const Lesson1 = () => {

    const [post, setPost] = useState([])
    const [value, setValue] = useState([])
    const [countTrue, setCountTrue] = useState(0)
    const [countAll, setCountAll] = useState(0)

    async function phraseMethod() {
    const getPhrase = await axios.get('http://localhost:8099/api/lessons/lesson-1')
        setPost(getPhrase.data)
        setValue('')
        setCountAll(countAll + 1)
    }

    function phraseCompare(value, post) {
        if (value === post.engForm) {
            return phraseMethod;
        }
    }


    return (
        <div className="Main-site" align='center'>
            {post.engForm &&
             <div>
                 <details>
                     <summary>Подсказка</summary>
                     <b>{post.engForm}</b>
                 </details>
                <p>Русская форма: {post.rusForm}</p>
                <input
                value={value}
                placeholder='Введите перевод'
                onChange={event => setValue(event.target.value)}
                />

                <button onClick={phraseCompare(value, post)}>Проверить</button>
             </div>
             }
            {!post.engForm &&
            <button onClick={phraseMethod}>Начать урок</button>
            }
            <div>
                <p>Удачно: {countTrue}</p>
                <p>Всего: {countAll}</p>
            </div>
        </div>
    );
};

export default Lesson1;
