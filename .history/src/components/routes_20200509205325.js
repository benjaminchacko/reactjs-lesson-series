import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { Counter } from "../pages/shoppingList";
import { ShoppingList } from "../pages/shoppingList";

export const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact={true} path="/" component={Counter} />
      <Route path="/about" component={ShoppingList} />
    </Switch>
  </Fragment>
);
