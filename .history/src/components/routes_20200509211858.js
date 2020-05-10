import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { CounterPage } from "../pages/counter"
import { ShoppingList }  from "../pages/shoppingList";

const Routes = () => (
  <Fragment>
    <Switch>
      <Route path="/" component={CounterPage} />
      <Route path="/shoppingList" component={ShoppingList} />
    </Switch>
  </Fragment>
);

export default Routes;
