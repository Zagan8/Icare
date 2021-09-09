import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "./MainPage.css";
import { Container } from "@material-ui/core";
import SimpleModal from "../Modal/Modal";
import Login from "../Login/Login";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

const MainPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div id="mainPage" className={classes.root}>
        <h1 className="entry-header">Here we care</h1>
        <div className="container">
          <SimpleModal type="Im here to help">
            <Login type="Im here to help" />
          </SimpleModal>
          <SimpleModal type="I need help">
            <Login type="I need help" />
          </SimpleModal>
        </div>
      </div>
    </>
  );
};

export default MainPage;
