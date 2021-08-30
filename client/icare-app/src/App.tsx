import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
