import React, { Fragment } from "react";
import { Link } from 'react-router-dom' 

const NavBar = () => (
  <Fragment>
    <nav>
      <ul className="nav-links">
      <h2>Logo</h2>
        <Link to="/">Counter</Link>
        <Link to="/shopping-list">About</Link>
      </ul>
    </nav>

    </Fragment>
)

export default NavBar;
