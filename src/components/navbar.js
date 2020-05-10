import React, { Fragment } from "react";
import { Link } from 'react-router-dom' 

import '../assets/css/navbar.css'

const NavBar = () => (
  <Fragment>
    <nav>
      <ul className="nav-links">
      <h2>Logo</h2>
        <Link to="/">Counter</Link>
        <Link to="/shoppingList">Shopping List</Link>
      </ul>
    </nav>

    </Fragment>
)

export default NavBar;
