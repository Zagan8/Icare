import React from "react";
interface iModalState {
  documentType: string;
  setDocumentType: any;
  user: any;
  setUser: any;
}
const state: iModalState = {
  documentType: "",
  setDocumentType: () => {},
  user: {},
  setUser: () => {}
};
const ModalState = React.createContext(state);

export default ModalState;
