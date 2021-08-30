import { Route, Switch } from "react-router-dom";
import HelperPage from "../HelperPage/HelperPage";
import MainPage from "../MainPage/MainPage";

const Router: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/helper">
          <HelperPage />
        </Route>
        <Route path="/" component={MainPage} />
        <Route path="/helper" component={HelperPage} />
      </Switch>
    </div>
  );
};

export default Router;
