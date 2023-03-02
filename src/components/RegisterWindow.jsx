import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp } from "../features/applicationSlice";

const RegisterWindow = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSetLogin = (value) => {
    setLogin(value);
  };
  const handleSetPassword = (value) => {
    setPassword(value);
  };

  const hahndleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ login, password }));
  };

  return (
    <form onSubmit={hahndleSignUp} className="registerPage">
      <input
        value={login}
        onChange={(e) => handleSetLogin(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => handleSetPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button>Зарегистрироваться</button>
      <button onClick={() => props.setLog(false)}>
        У меня уже есть аккаунт
      </button>
    </form>
  );
};

export default RegisterWindow;
