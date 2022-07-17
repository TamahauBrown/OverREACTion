import React from 'react';
import './App.css';
import { Header } from "./GlobalElements/Header";
import { Footer } from "./GlobalElements/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <body className="App-body">
        Welcome to Light Sorcerer's Compendium!
        </body>
      <Footer />
    </div>
  );
}

export default App;