import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "./MainPage.css";

const MainPage: React.FC = () => {
  let history = useHistory();
  return (
    <div id="mainPage">
      <h1 className="entry-header">Here we care</h1>

      <Button
        onClick={() => history.push("/helper")}
        className="inNeed-btn"
        variant="contained"
        color="primary"
        size="large"
      >
        Im here to help
      </Button>
      <Button
        onClick={() => history.push("/InNeedPage")}
        className="helper-btn"
        variant="contained"
        color="secondary"
        size="large"
      >
        I need help
      </Button>
    </div>
  );
};

export default MainPage;
