import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

import AllPatients from "./containers/AllPatients"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/patients">
        <AllPatients/>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}