import { Route, Switch } from "react-router-dom";
import HelperPage from "../HelperPage/HelperPage";
import InNeedPage from "../InNeedPage/InNeedPage";
import MainPage from "../MainPage/MainPage";
import StartingPage from "../StartingPage/StartingPage";
import { userState, setUserState } from "../state/user-state";

const Router: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/helper" component={HelperPage}>
          <HelperPage  />
        </Route>
        <Route path="/InNeedPage" component={InNeedPage} />
        <Route path="/MainPage" component={MainPage} />
        <Route path="/" component={StartingPage} />
      </Switch>
    </div>
  );
};

export default Router;
