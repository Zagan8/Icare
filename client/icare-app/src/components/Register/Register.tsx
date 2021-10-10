import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Button, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import ModalState from "../state/modal-state";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: "25ch"
    }
  })
);

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const Register: React.FC = () => {
  const { documentType, setDocumentType } = useContext(ModalState);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  let history = useHistory();
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });
  const [confirmValues, setConfirmValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });
  function registerUser(user: string, email: string, password: string) {
    axios
      .post("http://localhost:1337/users", {
        username: user,
        email: email,
        password: password
      })
      .then(res => console.log(res));
  }

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleConfirmChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmValues({ ...confirmValues, [prop]: event.target.value });
  };

  const handleConfirmClickShowPassword = () => {
    setConfirmValues({
      ...confirmValues,
      showPassword: !confirmValues.showPassword
    });
  };

  const handleConfirmMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div id="login-modal" className={classes.root}>
      <h2>Register</h2>
      <TextField
        onChange={e => {
          setUser(e.target.value);
        }}
        label="User name"
        id="standard-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{}}
      />
      <TextField
        onChange={e => {
          setEmail(e.target.value);
        }}
        label="Email"
        id="standard-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{}}
      />

      <FormControl className={clsx(classes.margin, classes.textField)}>
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
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">
          Confirm Password
        </InputLabel>
        <Input
          id="standard-adornment-password"
          type={confirmValues.showPassword ? "text" : "password"}
          value={confirmValues.password}
          onChange={handleConfirmChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleConfirmClickShowPassword}
                onMouseDown={handleConfirmMouseDownPassword}
              >
                {confirmValues.showPassword ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <br />

      <Button
        onClick={() => {
          console.log(email, values.password);
          registerUser(user, email, values.password);
        }}
        variant="contained"
        color="primary"
      >
        Register
      </Button>
      <Button
        onClick={() => {
          setDocumentType("login");
        }}
      >
        Go backk
      </Button>
    </div>
  );
};

export default Register;
