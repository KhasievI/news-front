import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../features/applicationSlice";

const RegisterWindow = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((state) => state.applicationReducer.regMessage);

  const handleSetName = (value) => {
    setName(value);
  };

  const handleSetLastname = (value) => {
    setLastname(value);
  };

  const handleSetLogin = (value) => {
    setLogin(value);
  };
  const handleSetPassword = (value) => {
    setPassword(value);
  };

  const hahndleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ name, lastname, login, password }));
  };

  return (
    <form onSubmit={hahndleSignUp} className="registerForm">
      <h4>Регистрация</h4>
      <input
        className="modalInput"
        value={name}
        onChange={(e) => handleSetName(e.target.value)}
        type="text"
        placeholder="Имя"
      />
      <input
        className="modalInput"
        value={lastname}
        onChange={(e) => handleSetLastname(e.target.value)}
        type="text"
        placeholder="Фамилия"
      />
      <input
        className="modalInput"
        value={login}
        onChange={(e) => handleSetLogin(e.target.value)}
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
      <button className="signBtn">Зарегистрироваться</button>
      <button onClick={() => props.setLog(false)} className='signBtn'>
        У меня уже есть аккаунт
      </button>
      {message && <div className="messageError">{message}</div>}
    </form>
  );
};

export default RegisterWindow;

