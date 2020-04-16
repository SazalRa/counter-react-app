import React from "react";


// Stateless Function Component
const NavBar = ({ totalCounters }) => {

  return (
    <nav class="navbar navbar-light bg-light">
      Navbar{" "}
      <a className="navbar-brand" href="#">
        <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
}

export default NavBar;
