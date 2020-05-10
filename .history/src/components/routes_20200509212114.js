import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { CounterPage } from "../pages/counter"
import { ShoppingListPage }  from "../pages/shoppingList";

export const Routes = () => (
  <Fragment>
    <Switch>
      <Route path="/" component={ CounterPage } />
      <Route path="/shoppingList" component={ ShoppingListPage } />
    </Switch>
  </Fragment>
);
