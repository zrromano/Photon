import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ links, user }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm bg-dark">
      <NavLink to="/" className="navbar-brand" style={{ color: "lightgrey" }}>
        Logo
      </NavLink>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav mr-auto">
          {links.map(link => (
            <NavLink
              key={link.path}
              className="nav-item nav-link"
              to={link.path}
              style={{ color: "lightgrey" }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="nav navbar-nav ml-auto w-100 justify-content-end">
          {!user && (
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
