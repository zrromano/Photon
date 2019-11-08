import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ links }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm bg-dark">
      <Link to="/" className="navbar-brand" style={{ color: "lightgrey" }}>
        Vidly
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {links.map(link => (
            <li key={link.path} className="nav-item">
              <Link
                to={link.path}
                className="nav-link"
                style={{ color: "lightgrey" }}
              >
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
