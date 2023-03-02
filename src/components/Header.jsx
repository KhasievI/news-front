import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconLogin from "../images/iconLogin.png";
import LoginWindow from "./LoginWindow";
import RegisterWindow from "./RegisterWindow";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [log, setLog] = useState(false);

  return (
    <header className="header">
      <div></div>
      <Link to="/">
        <div className="newsLogo Link">
          <strike>FAKE</strike>NEWS
        </div>
      </Link>
      <img
        onClick={() => setOpenLogin(!openLogin)}
        className="iconLogin"
        src={iconLogin}
        alt="iconLogin"
      />
      {openLogin && (
        <div className="loginWindow">
          {" "}
          {log ? (
            <RegisterWindow setLog={setLog} />
          ) : (
            <LoginWindow setLog={setLog} />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

<div className="links">
  <Link to="/login">login</Link>
  <Link to="/register">register</Link>
</div>;
