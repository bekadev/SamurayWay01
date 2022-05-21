import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            Hello, samurai! Let's go!
            <List/>
        </div>
    );
}

const Header = () => {
    return <div>
        <a href={"#"}>Home </a>
        <a href={"#"}>Cafe </a>
        <a href={"#"}>Restaurant </a>
    </div>
}

const List = () => {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
}

export default App;
