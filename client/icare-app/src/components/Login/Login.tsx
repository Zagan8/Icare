import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Login.css";
import SimpleModal from "../Modal/Modal";
import Register from "../Register/Register";
import ModalState from "../state/modal-state";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200
      }
    }
  })
);

const Login: React.FC<{ type: string }> = props => {
  const { setUser, setDocumentType } = useContext(ModalState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const classes = useStyles();
  return (
    <div id="login-modal" className={classes.root}>
      <h2>Log in</h2>
      <TextField
        onChange={e => {
          setEmail(e.target.value);
        }}
        label="Email"
      />
      <TextField
        onChange={e => {
          setPassword(e.target.value);
        }}
        label="Password"
      />
      <br />
      <Link href="#">Forget password?</Link>
      <Button
        onClick={async () => {
          await axios
            .post("http://localhost:3001/auth/local", {
              identifier: email,
              password: password
            })
            .then(response => {
              if (response.status === 200) {
                console.log(response.data);

                localStorage.setItem("jwt", response.data.jwt);
                setUser(response.data.user);
                history.push("/MainPage");
              }
            });
        }}
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
      <Button
        onClick={() => {
          setDocumentType("register");
        }}
        variant="contained"
        color="secondary"
      >
        Register now
      </Button>
    </div>
  );
};

export default Login;
