import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../features/applicationSlice";

const LoginWindow = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((state) => state.applicationReducer.logMessage);
  const handleSetText = (text) => {
    setLogin(text);
  };
  const handleSetPassword = (value) => {
    setPassword(value);
  };
  const hahndleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignIn({ login, password }));
    setLogin("");
    setPassword("");
  };
 

  return (
    <form onSubmit={hahndleSignUp} className="registerForm">
      <h4>Вход</h4>
      <input
        className="modalInput"
        value={login}
        onChange={(e) => handleSetText(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        className="modalInput"
        value={password}
        onChange={(e) => handleSetPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button className="signBtn">Войти</button>
      {message && <div className="messageError">{message}</div>}
      <button className="btnRegister" onClick={() => props.setLog(true)}>
        Зарегистрироваться
      </button>
      <div className="info">
        После авторизации вы получите доступ ко всем возможностям нашего сайта
      </div>
    </form>
  );
};

export default LoginWindow;
