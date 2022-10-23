import "../styles/textField.css"

interface TextFieldProps {
  type: string;
  label: string;
  onChange: any;
}

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="textfield">
      <label className="textfield_label">{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        className="textfield_input"
      />
    </div>
  );
};
