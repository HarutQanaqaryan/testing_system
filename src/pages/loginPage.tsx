import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { TextField } from "../components/textField";
import { FAKE_LOGIN, FAKE_PASSWORD } from "../helpers/constants";
import "../styles/login.css";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value.trim());
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };

  const signIn = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (login === FAKE_LOGIN && password === FAKE_PASSWORD) {
      navigate("../tests");
      localStorage.setItem("SIGN_IN", JSON.stringify(true));
      setError(false);
    } else {
      localStorage.setItem("SIGN_IN", JSON.stringify(false));
      setError(true);
    }
  };

  console.log(login === FAKE_LOGIN && password === FAKE_PASSWORD);

  return (
    <div className="login">
      <form onSubmit={(e) => signIn(e)}>
        <TextField label="Логин" onChange={handleLogin} type="text" />
        <TextField label="Пароль" onChange={handlePassword} type="password" />
        <Button name="Войти" />
      </form>
      {error && (
        <p className="error_message">Не правильно ввели логин или пароль</p>
      )}
    </div>
  );
};
