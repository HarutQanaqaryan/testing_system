import { useState } from "react";
import { NavBar } from "../components/navBar";
import { TestCard } from "../components/testCard";
import { testsList } from "../helpers/testsList";
import addTest from "../assets/add.png";
import "../styles/tests.css";
import { NewTest } from "../components/newTest";
import { checkTestsStorage } from "../helpers/checkStorage";

export const Tests = () => {
  const [tests, setTests] = useState(testsList);
  const [isModal, setIsModal] = useState(false);

  const onOffTest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTests(
      tests.map((el) =>
        el.id === Number(e.target.id) ? { ...el, on: !el.on } : el
      )
    );
  };

  const removeTest = (e: any) => {
    setTests(tests.filter((el) => el.id !== Number(e.target.id)));
  };

  const saveNewTest = () => {
    setTests([...tests, checkTestsStorage()]);
    setIsModal(!isModal);
  };

  console.log(tests)
  return (
    <div>
      <NavBar />
      <div className="tests">
        <h1 className="tests-header">Тесты</h1>
        <div className="tests_list">
          {tests.map((el) => (
            <TestCard
              name={el.name}
              questions={el.questions.length}
              testOn={el.on}
              onChange={onOffTest}
              removeTest={removeTest}
              id={String(el.id)}
              key={el.id}
            />
          ))}
          {tests.length === 0 && <h3>Тестов нет!</h3>}
        </div>
      </div>
      <div className="tests_add" onClick={() => setIsModal(!isModal)}>
        <img src={addTest} alt="Добавить тест" />
      </div>
      {isModal && (
        <NewTest
          closeModal={saveNewTest}
          lastTestId={tests[tests.length - 1].id + 1}
        />
      )}
    </div>
  );
};
