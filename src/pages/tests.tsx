import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logOutIcon from "../assets/log-out.svg";
import "../styles/tests.css";

export const Tests = () => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("../");
    localStorage.removeItem("SIGN_IN");
  };

  return (
    <div className="tests">
      <div className="tests-navbar">
        <div className="tests-navbar_links">
          <NavLink to="/tests" className="tests-navbar_link">
            Тесты
          </NavLink>
          <NavLink to="/tests" className="tests-navbar_link">
            Пользователи
          </NavLink>
        </div>
        <img
          src={logOutIcon}
          alt="Log Out"
          className="tests-navbar_logout"
          onClick={logOut}
        />
      </div>
    </div>
  );
};
