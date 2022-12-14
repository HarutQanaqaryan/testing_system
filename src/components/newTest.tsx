import { useState } from "react";
import { TextField } from "./textField";
import "../styles/new-test.css";
import { Button } from "./button";
import close from "../assets/close.svg";
import { Question } from "./question";

interface NewTestProps {
  closeModal: any;
  lastTestId: number;
}

export const NewTest = (props: NewTestProps) => {
  const [newTestName, setNewTestName] = useState<string>("");
  const [storageQuestion, setStorageQuestion] = useState<any[]>([]);
  const [isTestAdded, setIsTestAdded] = useState<boolean>(false);

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTestName(e.target.value);
  };

  const saveQuestion = (e: any) => {
    e.preventDefault();
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
    setNewTestName("");
    setIsTestAdded(true);
    setTimeout(() => setIsTestAdded(false), 2000);
  };

  return (
    <div className="new-test_wrapper">
      <div className="new-test">
        <img
          src={close}
          alt="Закрыть"
          className="new-test-close"
          onClick={props.closeModal}
        />
        <TextField
          label="Название Теста"
          onChange={handleFields}
          type="text"
          value={newTestName}
        />
        <Question questionId={Math.random()} saveQuestion={saveQuestion} />
      </div>
      <Button name="Добавить тест" onClick={addTest} />
      {isTestAdded && (
        <div className="new-test_question-saved">
          <p>Тест добавлен!</p>
        </div>
      )}
    </div>
  );
};
