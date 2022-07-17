import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Pages
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aeryaan } from "./Components/Aeryaan/Aeryaan";
import { DMNotes } from "./Components/DM Notes/Dm Notes";
import { Kava } from "./Components/Kava/Kava"
import { Serenity } from "./Components/Serenity/Serenity";
import { Sol } from "./Components/Sol/Sol";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="aeryaan" element={<Aeryaan />} />
              <Route path="dmnotes" element={<DMNotes />} />
              <Route path="kava" element={<Kava />} />
              <Route path="serenity" element={<Serenity />} />
              <Route path="sol" element={<Sol />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();