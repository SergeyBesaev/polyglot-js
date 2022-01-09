import React, {useState} from "react";
import Header from "./component/Header/Header";
import Lesson1 from "./component/Main/Lesson1";

function App() {
    const [post, setPost] = useState([])


  return (
    <div className="App">
        <Header/>
        <Lesson1/>
    </div>
  );
}

export default App;
