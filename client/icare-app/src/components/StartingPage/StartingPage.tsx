import "./StartingPage.css";
import React, { useState } from "react";
import SimpleModal from "../Modal/Modal";
import Login from "../Login/Login";
import ModalState from "../state/modal-state";
import Register from "../Register/Register";
const StartingPage: React.FC = () => {
  const [documentType, setDocumentType] = useState("login");

  return (
    <div className="starting-page">
      <p className="cloud-text cloud-title">Icare</p>
      <p className="cloud-text attribute">Place that you can make change!</p>
      <div className="simple-modal">
        <ModalState.Provider
          value={{
            documentType: documentType,
            setDocumentType: setDocumentType
          }}
        >
          <SimpleModal content="Log-in">
            {documentType === "login" ? <Login type="Login" /> : <Register />}
          </SimpleModal>
        </ModalState.Provider>
      </div>
    </div>
  );
};

export default StartingPage;
