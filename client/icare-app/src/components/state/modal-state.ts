import React from "react";
interface iModalState {
  documentType: string;
  setDocumentType: any;
}
const state: iModalState = {
  documentType: "",
  setDocumentType: () => {}
};
const ModalState = React.createContext(state);

export default ModalState;
