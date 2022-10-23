export const answerSetter = (target: any, set: any, answer: {answer: string, correct: boolean}) => {
  target.type === "text" && set({ answer: target.value, correct: false });
  target.type === "checkbox" && set({ answer: answer?.answer, correct: !answer.correct });
};
