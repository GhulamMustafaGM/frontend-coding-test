import { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WithSuspenseContainer from "./WithSuspenseContainer";
import MainLayoutContent from '../components/MainContent'

const ShowRoomPage = WithSuspenseContainer(
  lazy(() => import("../utils/ShowRoomPage")),
  <div/>
);

const PageNotExisted = WithSuspenseContainer(
  lazy(() => import("../utils/404")),
  <div/>
);


const RoutesContainer = () => {
  return (
    <Router>
      <MainLayoutContent>
        <Switch>
          <Route exact path={"/"} component={ShowRoomPage} />
          <Route
            exact
            path={"/volvoCars"}
            component={ShowRoomPage}
          />
                  
          <Route component={PageNotExisted} />
        </Switch>
      </MainLayoutContent>
    </Router>
  );
};

export default RoutesContainer;
