import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Login.css";
import ModalState from "../state/modal-state";
import axios from "axios";
import { setUserState } from "../state/user-state";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

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
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { setDocumentType } = useContext(ModalState);
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
      <FormControl sx={{ m: 1, width: "20ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      {/* <TextField
        onChange={e => {
          setPassword(e.target.value);
        }}
        label="Password"
      /> */}
      <br />
      <Link href="#">Forget password?</Link>
      <Button
        onClick={async () => {
          await axios
            .post("http://localhost:3001/auth/local", {
              identifier: email,
              password: values.password
            })
            .then(response => {
              if (response.status === 200) {
                console.log(response.data);

                localStorage.setItem("jwt", response.data.jwt);
                console.log(response.data.user.username);
                setUserState(response.data.user);
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
