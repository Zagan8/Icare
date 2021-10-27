import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import ModalState from "./components/state/modal-state";

function App() {
  const [documentType, setDocumentType] = useState("login");
  const [user, setUser] = useState<any>({});
  return (
    <div className="App">
      <ModalState.Provider
        value={{
          documentType: documentType,
          setDocumentType: setDocumentType
        }}
      >
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </ModalState.Provider>
    </div>
  );
}

export default App;
