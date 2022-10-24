export const checkCorrectAnswers = (arr: any[]) => {
  return arr.reduce((acc: number, el: any) => acc + el.correctAnswers, 0);
};

export const checkAverageScore = (arr: any[]) => {
  return (
    arr.reduce((acc: number, el: any) => acc + el.correctAnswers, 0) /
    arr.length
  );
};
