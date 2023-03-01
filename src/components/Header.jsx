import React from "react";
import { Link } from "react-router-dom";
import iconLogin from "../images/iconLogin.png";


const Header = () => {
  return (
    <header className="header">
      <div></div>
      <Link to="/"><div className="newsLogo Link"><strike>FAKE</strike>NEWS</div></Link>
      <Link ><img className="iconLogin" src={iconLogin} alt="iconLogin" /></Link>
    </header>
  );
};

export default Header;

//  <div className="links">
//   <Link to="/login">login</Link>
//   <Link to="/register">register</Link>
// </div>
