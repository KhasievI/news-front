import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="links">
        <Link to="/">home</Link>    
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </div>
    </header>
  );
};

export default Header;
