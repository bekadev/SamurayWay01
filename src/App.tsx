import React from 'react';
import  './App.css';
import {Header} from "./components/Header";
import List from "./components/List";
import {Navbar} from "./components/Navbar";
import {Main} from "./components/Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='elementFlex'>
                <Navbar />
                <Main />
            </div>
        </div>
    );
}

export default App;
