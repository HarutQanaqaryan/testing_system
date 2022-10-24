export  const mockUsers: any[] = [
  {
    id: 1,
    name: "Иван Иванов",
    tests: [
      {
        id: 1,
        name: "JavaScript",
        attempts: [
          { id: 1, date: "01.01.2022", time: "18:00", timeSpent: "25", correctAnswers: 3 },
          { id: 2, date: "02.03.2022", time: "19:00", timeSpent: "15", correctAnswers: 12 },
          { id: 3, date: "02.11.2022", time: "20:50", timeSpent: "55", correctAnswers: 2 },
        ],
      },
      {
        id: 2,
        name: "HTML",
        attempts: [
          { id: 1, date: "01.04.2022", time: "11:40", timeSpent: "20", correctAnswers: 3 },
          { id: 2, date: "21.01.2022", time: "18:00", timeSpent: "29", correctAnswers: 10 },
        ],
      },
      {
        id: 3,
        name: "CSS",
        attempts: [
          { id: 1, date: "01.11.2022", time: "16:10", timeSpent: "15", correctAnswers: 3 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Василий Василев",
    tests: [
      {
        id: 1,
        name: "CSS",
        attempts: [
          { id: 1, date: "11.11.2022", time: "16:50", timeSpent: "25", correctAnswers: 33 },
          { id: 2, date: "21.01.2022", time: "20:10", timeSpent: "30", correctAnswers: 10 },
        ],
      },
      {
        id: 2,
        name: "HTML",
        attempts: [
          { id: 1, date: "11.02.2022", time: "18:00", timeSpent: "60", correctAnswers: 3 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Наталья Соколова",
    tests: [
      {
        id: 1,
        name: "HTML",
        attempts: [
          { id: 1, date: "21.03.2022", time: "10:40", timeSpent: "45", correctAnswers: 1 },
          { id: 2, date: "11.06.2022", time: "10:00", timeSpent: "19", correctAnswers: 10 },
          { id: 3, date: "02.04.2022", time: "11:00", timeSpent: "30", correctAnswers: 2 },
        ],
      },
      {
        id: 2,
        name: "JavaScript",
        attempts: [
          { id: 1, date: "30.03.2022", time: "14:30", timeSpent: "40", correctAnswers: 3 },
          { id: 2, date: "02.02.2022", time: "12:10", timeSpent: "20", correctAnswers: 0 },
          { id: 3, date: "05.04.2022", time: "18:00", timeSpent: "10", correctAnswers: 2 },
        ],
      },
    ],
  },
];
