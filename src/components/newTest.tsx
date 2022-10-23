import { useState } from "react";
import { TextField } from "./textField";
import "../styles/new-test.css";
import { Button } from "./button";
import close from "../assets/close.svg";
import addQuestionIcon from "../assets/add.png";
import { Question } from "./question";

interface NewTestProps {
  closeModal: any;
  lastTestId: number;
}

export const NewTest = (props: NewTestProps) => {
  const [quantity, setQuantity] = useState([1]);
  const [newTestName, setNewTestName] = useState("");
  const [storageQuestion, setStorageQuestion] = useState<any[]>([]);

  const createQuestionBlock = () => {
    return quantity.map((el) => (
      <Question key={el + 1} questionId={el} saveQuestion={saveQuestion} />
    ));
  };

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTestName(e.target.value);
  };

  const addQuestion = () => {
    setQuantity((prevState) => [
      ...prevState,
      quantity[quantity.length - 1] + 1,
    ]);
  };

  const saveQuestion = (e: any) => {
    setStorageQuestion((prevState) => [
      ...prevState,
      typeof sessionStorage.getItem("QUESTION") === "string"
        ? JSON.parse(sessionStorage.getItem("QUESTION") || "")
        : "",
    ]);
  };

  const addTest = () => {
    localStorage.setItem(
      "TEST",
      JSON.stringify({
        id: props.lastTestId,
        name: newTestName,
        on: true,
        questions: storageQuestion,
      })
    );
    sessionStorage.removeItem("QUESTION");
  };

  return (
    <div className="new-test">
      <img
        src={close}
        alt="Закрыть"
        className="new-test-close"
        onClick={props.closeModal}
      />
      <TextField label="Название Теста" onChange={handleFields} type="text" />
      {createQuestionBlock()}
      <div className="tests_add">
        <img
          src={addQuestionIcon}
          alt="Добавить Вопрос"
          onClick={addQuestion}
        />
      </div>
      <Button name="Добавить тест" onClick={addTest} />
    </div>
  );
};
