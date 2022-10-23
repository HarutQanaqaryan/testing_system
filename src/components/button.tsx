import "../styles/button.css";

interface ButtonPropType {
  name: string;
  onClick?: () => any;
}

export const Button = (props: ButtonPropType) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.name}
    </button>
  );
};
