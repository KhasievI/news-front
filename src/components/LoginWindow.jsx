import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignIn } from "../features/applicationSlice";

const LoginWindow = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const handleSetText = (text) => {
    setLogin(text);
  };
  const handleSetPassword = (value) => {
    setPassword(value);
  };
  const hahndleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignIn({ login, password }));
    setLogin('')
    setPassword('')
  }

  return (
    <form onSubmit={hahndleSignUp} className="loginPage">
      <input
        value={login}
        onChange={(e) => handleSetText(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => handleSetPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button>Войти</button>
      <button className="btnRegister" onClick={() => props.setLog(true)}>
        Зарегистрироваться
      </button>
      <div>После регистрации вы получите доступ ко всем возможностям нашего сайта</div>
    </form>
  );
};

export default LoginWindow;
