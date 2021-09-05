import { Route, Switch } from "react-router-dom";
import HelperPage from "../HelperPage/HelperPage";
import InNeedPage from "../InNeedPage/InNeedPage";
import MainPage from "../MainPage/MainPage";

const Router: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/helper" component={HelperPage} />
        <Route path="/InNeedPage" component={InNeedPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

export default Router;
