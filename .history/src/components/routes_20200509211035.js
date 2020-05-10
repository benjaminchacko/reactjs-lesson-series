import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Counter from "../pages/counter"
import ShoppingList from "../pages/shoppingList";
import NotFound from '../pages/notfound'

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact={true} path="/" component={Counter} />
      <Route path="/shoppingList" component={ShoppingList} />
      <Route path="/" component={NotFound}/>
    </Switch>
  </Fragment>
);

export default Routes;
