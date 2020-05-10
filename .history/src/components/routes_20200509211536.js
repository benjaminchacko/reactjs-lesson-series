import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { CounterPage } from "../pages/counter"
import ShoppingList from "../pages/shoppingList";
import NotFound from '../pages/notfound'

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact={true} path="/" component={CounterPage} />
      <Route path="/shoppingList" component={ShoppingList} />
      <Route path="/" component={NotFound}/>
    </Switch>
  </Fragment>
);

export default Routes;
