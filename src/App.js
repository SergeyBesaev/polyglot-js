import React, {useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";

function App() {

    const [posts, setPosts] = useState([
        {id:1, title: 'JavaScript', description: 'TestDescription'},
        {id:2, title: 'JavaScript', description: 'TestDescription'},
        {id:3, title: 'JavaScript', description: 'TestDescription'}
    ])

    const [posts2, setPosts2] = useState([
        {id:1, title: 'Python', description: 'TestDescription'},
        {id:2, title: 'Python', description: 'TestDescription'},
        {id:3, title: 'Python', description: 'TestDescription'}
    ])


  return (
    <div className="App">
        <PostList posts={posts} title="Список №1"/>
        <PostList posts={posts2} title="Список №2"/>
    </div>
  );
}

export default App;
