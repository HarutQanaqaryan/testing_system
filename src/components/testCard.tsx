import remove from "../assets/delete.svg";
import "../styles/test-card.css";

interface TestCardProps {
  name: string;
  questions: number;
  testOn: boolean;
  onChange: any;
  removeTest: any;
  id: string;
}

export const TestCard = (props: TestCardProps) => {
  return (
    <div className="test-card">
      <h3 className="test-card_name">{props.name}</h3>
      <h5 className="test-card_questions">
        Количество вопросов: {props.questions}
      </h5>
      <div className="test-card_off_test">
        <label>{props.testOn ? "Отключить" : "Включить"}</label>
        <input
          id={props.id}
          type="checkbox"
          checked={props.testOn}
          onChange={props.onChange}
        />
      </div>
      <img
        src={remove}
        alt="Удалить"
        onClick={props.removeTest}
        id={props.id}
        className="test-card_remove"
      />
    </div>
  );
};
