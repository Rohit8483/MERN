import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/nav_footer.css";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate=useNavigate();

  const logOut=()=>{
    localStorage.clear("user");
    navigate("/signup")
  }

  return (
    <>
      <ul className="navbar-ul">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">Update Products</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          {auth ? (
            <Link to="/signup" onClick={logOut}>Logout</Link>
          ) : (
            <Link to="/signup">Sign up</Link>
          )}
        </li>
      </ul>
    </>
  );
};

export default Navbar;
