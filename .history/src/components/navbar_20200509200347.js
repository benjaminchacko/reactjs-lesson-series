import React, { Fragment } from "react";
import { Link } from 'react-router-dom' 

const NavBar = () => (
  <Fragment>
    <nav>
      <ul className="nav-links">
      <h2>Logo</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <DarkMode />
      </ul>
    </nav>

    </Fragment>
)

export default NavBar;