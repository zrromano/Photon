import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ links }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <Link to="/" className="navbar-brand">
        Vidly
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {links.map(link => (
            <li key={link.path} className="nav-item">
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
