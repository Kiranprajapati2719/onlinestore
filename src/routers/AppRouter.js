import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../Components/NotFound/NotFound";
import Homepage from "../Components/Homepage/index";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" render={() => <Homepage />} exact />
      <Route render={() => <NotFound />} />
    </Switch>
  </Router>
);

export default AppRouter;
