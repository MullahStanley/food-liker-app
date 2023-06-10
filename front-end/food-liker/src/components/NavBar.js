import React from "react";
import NavLink from "react-dom"

function NavBar() {
    return (
      <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/form" activeClassName="active">Add Food</NavLink>
      </nav>
    );
  }

export default NavBar