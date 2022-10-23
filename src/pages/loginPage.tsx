import { Button } from "../components/button";
import { TextField } from "../components/textField";
import "../styles/login.css"

export const Login = () => {
  return (
    <div className="login">
      <form>
        <TextField
          label="Логин"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)}
          type="string"
        />
        <TextField
          label="Пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)}
          type="password"
        />
        <Button name="Войти" />
      </form>
    </div>
  );
};
