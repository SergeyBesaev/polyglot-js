import React, {useState} from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Menu from "./component/Menu/Menu";

function App() {
    const [post, setPost] = useState([])


  return (
    <div className="App">
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
