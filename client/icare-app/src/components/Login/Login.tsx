import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core";
import "./Login.css";

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

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="login-modal" className={classes.root}>
      <h2>Log in</h2>
      <TextField label="User Name" />
      <TextField label="Password" />
      <br />
      <Link href="#">Forget password?</Link>
      <Button color="primary">Sign in</Button>
      <Button variant="contained" color="secondary">
        Register now
      </Button>
    </div>
  );
};

export default Login;
