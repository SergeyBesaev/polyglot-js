import React, {useState} from "react";

function Counter() {

    const [likes, setLike] = useState(5)

    function like() {
        setLike(likes + 1);
    }

    function dislike() {
        setLike(likes - 1);
    }

    return (
        <div className={Counter}>
            <h1>{likes}</h1>
            <button onClick={like}>Like</button>
            <button onClick={dislike}>Dislike</button>
        </div>
    );
}

export default Counter;
