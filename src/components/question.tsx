import { useState, useEffect } from "react";
import { answerSetter } from "../helpers/handleAnswers";
import { Button } from "./button";
import { TextField } from "./textField";

interface QuestionProps {
  questionId?: number;
  saveQuestion: any;
}

export const Question = (props: QuestionProps) => {
  const [question, setQuestion] = useState<string>("");
  const [firstAnswer, setFirstAnswer] = useState({
    answer: "",
    correct: false,
  });
  const [secAnswer, setSecAnswer] = useState({ answer: "", correct: false });
  const [thirdAnswer, setThirdAnswer] = useState({
    answer: "",
    correct: false,
  });
  const [fourthAnswer, setFourthAnswer] = useState({
    answer: "",
    correct: false,
  });

  const handleQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };
  const handleFirsthAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    answerSetter(e.target, setFirstAnswer, firstAnswer);
  };
  const handleSecAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    answerSetter(e.target, setSecAnswer, secAnswer);
  };
  const handleThirdAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    answerSetter(e.target, setThirdAnswer, thirdAnswer);
  };
  const handleFourthAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    answerSetter(e.target, setFourthAnswer, fourthAnswer);
  };

  const removeFields = () => {
    setQuestion("");
    setFirstAnswer({
      answer: "",
      correct: false,
    });
    setSecAnswer({
      answer: "",
      correct: false,
    });
    setThirdAnswer({
      answer: "",
      correct: false,
    });
    setFourthAnswer({
      answer: "",
      correct: false,
    });
  };

  useEffect(() => {
    sessionStorage.setItem(
      "QUESTION",
      JSON.stringify({
        id: props.questionId,
        question: question,
        answers: [firstAnswer, secAnswer, thirdAnswer, fourthAnswer],
      })
    );
  }, [
    firstAnswer,
    secAnswer,
    fourthAnswer,
    thirdAnswer,
    props.questionId,
    question,
  ]);

  return (
    <form className="new-test_question" onSubmit={props.saveQuestion}>
      <div>
        <TextField
          label="Вопрос"
          onChange={handleQuestion}
          type="text"
          value={question}
        />
      </div>
      <div className="new-test_answers">
        <div className="new-test_answer">
          <TextField
            label="Ответ 1"
            onChange={handleFirsthAnswer}
            type="text"
            value={firstAnswer.answer}
          />
          <div className="correct_answer">
            <label htmlFor="correct">Правильный ответ</label>
            <input type="checkbox" id="correct" onChange={handleFirsthAnswer} />
          </div>
        </div>
        <div className="new-test_answer">
          <TextField
            label="Ответ 1"
            onChange={handleSecAnswer}
            type="text"
            value={secAnswer.answer}
          />
          <div className="correct_answer">
            <label htmlFor="correct">Правильный ответ</label>
            <input type="checkbox" id="correct" onChange={handleSecAnswer} />
          </div>
        </div>
        <div className="new-test_answer">
          <TextField
            label="Ответ 1"
            onChange={handleThirdAnswer}
            type="text"
            value={thirdAnswer.answer}
          />
          <div className="correct_answer">
            <label htmlFor="correct">Правильный ответ</label>
            <input type="checkbox" id="correct" onChange={handleThirdAnswer} />
          </div>
        </div>
        <div className="new-test_answer">
          <TextField
            label="Ответ 1"
            onChange={handleFourthAnswer}
            type="text"
            value={fourthAnswer.answer}
          />
          <div className="correct_answer">
            <label htmlFor="correct">Правильный ответ</label>
            <input type="checkbox" id="correct" onChange={handleFourthAnswer} />
          </div>
        </div>
      </div>
      <Button name={"Сохранить"} onClick={() => removeFields()} />
    </form>
  );
};