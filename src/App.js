import React, {useState} from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";

function App() {
    const [post, setPost] = useState([])
    const phrase = fetch('http://localhost:8099/api/lessons/lesson-1')
        .then(response => response.json())
        .then(data =>
            setPost(data)
        );


  return (
    <div className="App">
        <Header/>
        <Main x={phrase}/>
        <Footer/>
    </div>
  );
}

export default App;
