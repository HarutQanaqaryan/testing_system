import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logOutIcon from "../assets/log-out.svg";
import "../styles/navbar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("../");
    localStorage.removeItem("SIGN_IN");
  };
  return (
    <div className="navbar">
      <div className="navbar_links">
        <NavLink to="/tests" className="navbar_link">
          Тесты
        </NavLink>
        <NavLink to="/users" className="navbar_link">
          Пользователи
        </NavLink>
      </div>
      <img
        src={logOutIcon}
        alt="Log Out"
        className="navbar_logout"
        onClick={logOut}
      />
    </div>
  );
};
