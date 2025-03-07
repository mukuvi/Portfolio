import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-sect">
      <div className="header-logo">
        <h1>
          <NavLink to="/">James Ngandu</NavLink>
        </h1>
      </div>
      <div className={`header-navs ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger ${menuOpen ? "hide" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>
    </div>
  );
}

export default Header;
