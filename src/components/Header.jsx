import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authExit, fetchUsers } from "../features/applicationSlice";
import iconLogin from "../images/iconLogin.png";
import LoginWindow from "./LoginWindow";
import RegisterWindow from "./RegisterWindow";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const [modalActive, setModalActive] = useState(false);
  const [log, setLog] = useState(false);
  const token = useSelector((state) => state.applicationReducer.token);
  const user = useSelector((state) => state.applicationReducer.loginedUser);

  const handleAuthExit = () => {
    if (token) {
      dispatch(authExit());
    }
  };

  return (
    <header className="header">
      <div></div>
      <Link to="/">
        <div className="newsLogo Link">
          <strike>FAKE</strike>NEWS
        </div>
      </Link>
      <img
        onClick={() => setModalActive(!modalActive)}
        className="iconLogin"
        src={iconLogin}
        alt="iconLogin"
      />
      {modalActive && (
        <div className="modalWindow" onClick={(e) => setModalActive(false)}>
          <div className="loginWindow" onClick={(e) => e.stopPropagation()}>
            {token ? (
              <div className="personalArea">
                <div className="info">вы вошли как:</div>
                <div className="name">{`${user.lastname} ${user.name}`}</div>
                <button className="btnLeave" onClick={handleAuthExit}>выйти</button>
              </div>
            ) : !log ? (
              <LoginWindow setLog={setLog} />
            ) : (
              <RegisterWindow setLog={setLog} />
            )}
          </div>
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
