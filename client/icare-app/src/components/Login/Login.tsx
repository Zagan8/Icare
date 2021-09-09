import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Login.css";
import SimpleModal from "../Modal/Modal";
import Register from "../Register/Register";

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
  const [logintriger, setLoginTriger] = useState(false);
  let history = useHistory();
  const classes = useStyles();
  return !logintriger ? (
    <div id="login-modal" className={classes.root}>
      <h2>Log in</h2>
      <TextField label="User Name" />
      <TextField label="Password" />
      <br />
      <Link href="#">Forget password?</Link>
      <Button
        onClick={() => {
          props.type === "Im here to help"
            ? history.push("/helper")
            : history.push("/InNeedPage");
        }}
        color="primary"
      >
        Sign in
      </Button>
      <Button
        onClick={() => {
          setLoginTriger(true);
        }}
        variant="contained"
        color="secondary"
      >
        Register now
      </Button>
    </div>
  ) : (
    <Register />
  );
};

export default Login;
