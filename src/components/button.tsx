import "../styles/button.css";

interface ButtonPropType {
  name: string;
}

export const Button = (props: ButtonPropType) => {
  return <button className="button">{props.name}</button>;
};
