import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <p>BLOG</p>
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/">
          HOME
        </Link>
        <Link className="link" to="/?cat=tech">
          TECHNOLOGY
        </Link>
        <Link className="link" to="/?cat=sci">
          SCIENCE
        </Link>
        <Link className="link" to="/?cat=art">
          ARCHITECTURE
        </Link>
        <Link className="link" to="/?cat=food">
          FOOD
        </Link>
        <span>{currentUser?.username}</span>
        {currentUser ? (
          <span className="link" onClick={logout}>
            LOGOUT
          </span>
        ) : (
          <Link className="link" to="/login">
            LOGIN
          </Link>
        )}
        <span className="write">
          <Link className="bttn" to="/NewBlog">
            Write
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
