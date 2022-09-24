import React, {useEffect, useMemo, useState} from 'react';
import './App.scss';
import { Header } from "./GlobalElements/Header";
import { Footer } from "./GlobalElements/Footer";
import {textTransformer, textTransformation} from "./Modals/Modules";

function App() {
    // State variables
    const [count, setCount] = useState(0);
    const newText : textTransformer = useMemo(() => {
        return ChangeText(count);
    }, [count]);

    function ChangeText(count: number) {
        let newMessage = new textTransformation(count, "");
        switch(count % 5) {
            case 0:
                newMessage.message = "There is something for everyone";
                break;
            case 1:
                newMessage.message = "Serenity is full of suprises";
                break;
            case 2:
                newMessage.message = "This is a fun place to be";
                break;
            case 3:
                newMessage.message = "You will see plenty of magical creatures";
                break;
            case 4:
                newMessage.message = "Have you visited the land of Aeryaan yet?";
                break;
            default:
                newMessage.message = "Did not expect you here";
                break;
        }
        return newMessage;
    }
    return (
    <div className="App">
        <Header />
        <div className="App-body" onClick={() => { setCount(count + 1); }}>
        <h1 id="welcomeMessage">Welcome to Light Sorcerer's Compendium!</h1>
            <img src={require("./Images/Alinora.jpg")} alt="Main title photo"/>
            <h1 >{newText.message}</h1>
        </div>
      <Footer />
    </div>
  );
}

export default App;