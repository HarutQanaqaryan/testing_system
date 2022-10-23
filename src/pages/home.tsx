import { Login } from "./loginPage";
import { Tests } from "./tests";

export const Home = () => {
  const checkSignIn = () => {
    if (
      typeof localStorage.getItem("SIGN_IN") === "string" &&
      JSON.parse(localStorage.getItem("SIGN_IN") || "") === true
    ) {
      return <Tests />;
    } else {
      return <Login />;
    }
  };
  return <div>{checkSignIn()}</div>;
};
