import React, {useEffect} from 'react';
import './App.scss';
import { Header } from "./GlobalElements/Header";
import { Footer } from "./GlobalElements/Footer";

function App() {
  return (
    <div className="App">
        <title></title>
        <Header />
        <body className="App-body">
        Welcome to Light Sorcerer's Compendium!
        </body>
      <Footer />
    </div>
  );
}

export default App;