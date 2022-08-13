import React, {useEffect, useState } from 'react';
import './App.scss';
import { Header } from "./GlobalElements/Header";
import { Footer } from "./GlobalElements/Footer";
import ReactDOM from "react-dom/client"

function App() {
    // State variables
    const [bool, toggle] = useState(false);
    const [count, setCount] = useState(0);

    return (
    <div className="App">
        <Header />
        <body className="App-body">
        <h1 onClick={() => {
            setCount(count + 1);
            toggle(!bool);
        }} >Welcome to Light Sorcerer's Compendium! <br></br> You have clicked this text {count} times! <br></br> This value is {bool.toString()} </h1>
        </body>
      <Footer />
    </div>
  );
}

export default App;