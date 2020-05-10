import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import NotFound from '../pages/notfound'

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/" component={NotFound}/>
    </Switch>
  </Fragment>
);

export default Routes;
