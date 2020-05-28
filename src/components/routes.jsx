import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { CounterPage } from "../pages/counter";
import { ShoppingListPage } from "../pages/shoppingList";
import { MenuOptionsPage } from "../pages/menuOptions";

export const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact={true} path="/" component={ CounterPage } />
      <Route path="/shoppingList" component={ShoppingListPage} />
      <Route path="/menuOptions" component={MenuOptionsPage} />
    </Switch>
  </Fragment>
);
