import React from "react";
interface iUser {
  username: string;
}
export let userState: iUser = {
  username: ""
};
// const userState = React.createContext(state);

export function setUserState(value: any) {
  userState = { ...value };
}
