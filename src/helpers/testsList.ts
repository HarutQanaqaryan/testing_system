export const testsList = [
  {
    id: 1,
    name: "JavaScript",
    on: true,
    questions: [
      {
        id: 1,
        question: "Что делает оператор === ?",
        answers: [
          {
            answer: "Сравнивает по ссылке, а не по значению.",
            correct: false,
          },
          {
            answer: "Сравнивает без приведения типа.",
            correct: true,
          },
          {
            answer: "Нет такого оператора.",
            correct: false,
          },
          {
            answer: "Сравнивает с приведением типа.",
            correct: false,
          },
        ],
      },
      {
        id: 2,
        question: "Где верно указан запуск всплывающего окна?",
        answers: [
          {
            answer: "new alert ('Hi')",
            correct: false,
          },
          {
            answer: "alert ('Hi')",
            correct: true,
          },
          {
            answer: "info ('Hi')",
            correct: false,
          },
          {
            answer: "Нет верных вариантов",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "Какие значения можно хранить в переменных?",
        answers: [
          {
            answer: "Строки, числа с точкой, простые числа и булевые выражения",
            correct: true,
          },
          {
            answer: "Только числа и строки",
            correct: false,
          },
          {
            answer: "Строки, числа с точкой и простые числа",
            correct: false,
          },
          {
            answer: "Булевые выражения",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question: "Какая переменная записана неверно?",
        answers: [
          {
            answer: "var b = false;",
            correct: false,
          },
          {
            answer: "var number = 12,5;",
            correct: true,
          },
          {
            answer: "var isDone = 0;",
            correct: false,
          },
          {
            answer: "var num = 'STRING';",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "Где верно указан вывод данных?",
        answers: [
          {
            answer: "prompt('Hello')",
            correct: false,
          },
          {
            answer: "write('Hello');",
            correct: false,
          },
          {
            answer: "console.log('Hello');",
            correct: true,
          },
          {
            answer: "print(Hello);",
            correct: false,
          },
        ],
      },
      {
        id: 6,
        question: "Какие циклы есть в языке JavaScript?",
        answers: [
          {
            answer: "for, while, do while",
            correct: true,
          },
          {
            answer: "for, forMap, foreach, while",
            correct: false,
          },
          {
            answer: "for, forMap, foreach, while, do while",
            correct: false,
          },
          {
            answer: "for, while, do while, foreach",
            correct: false,
          },
        ],
      },
      {
        id: 7,
        question: "В чем отличие между локальной и глобальной переменной?",
        answers: [
          {
            answer: "Отличий нет",
            correct: false,
          },
          {
            answer: "Локальные видны повсюду, глобальные только в функциях",
            correct: false,
          },
          {
            answer: "Глобальные можно переопределять, локальные нельзя",
            correct: false,
          },
          {
            answer: "Глобальные видны повсюду, локальные только в функциях",
            correct: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Git",
    on: true,
    questions: [
      {
        id: 1,
        question: "Можно ли отследить хронологию событий через Git?",
        answers: [
          {
            answer: "Да, но лишь даты кто и что добавил в проект",
            correct: false,
          },
          {
            answer: "Да, но лишь отслеживать добавленные файлы",
            correct: false,
          },
          {
            answer:
              "Да, можно отследить дату, автора и изменения что были внесены",
            correct: true,
          },
          {
            answer: "Нет, нельзя",
            correct: false,
          },
        ],
      },
      {
        id: 2,
        question: "Что такое Git?",
        answers: [
          {
            answer: "Это распределённая система управления версиями",
            correct: true,
          },
          {
            answer: "Это таск-менеджер",
            correct: false,
          },
          {
            answer: "Это сервер для ваших проектов",
            correct: false,
          },
          {
            answer: "Это таск-менеджер",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question:
          "Какая команда в терминале служит для перехода к нужной папке?",
        answers: [
          {
            answer: "go 'папка'",
            correct: false,
          },
          {
            answer: "cd 'папка'",
            correct: true,
          },
          {
            answer: "mk 'папка'",
            correct: false,
          },
          {
            answer: "open 'папка'",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question: "Как в Git установить глобально Email пользователя?",
        answers: [
          {
            answer: "git user.email",
            correct: false,
          },
          {
            answer: "git --global user.email",
            correct: false,
          },
          {
            answer: "git config --global user.email",
            correct: true,
          },
          {
            answer: "git config-global user.email",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "Что такое GitHub?",
        answers: [
          {
            answer: "Технология для контроля версий проектов",
            correct: false,
          },
          {
            answer: "Веб-сервис для хостинга IT-проектов",
            correct: true,
          },
          {
            answer: "Графический интерфейс для работы с Git",
            correct: false,
          },
        ],
      },
      {
        id: 6,
        question: "Как можно установить Git?",
        answers: [
          {
            answer: "Лишь через официальный сайт",
            correct: false,
          },
          {
            answer: "Можно через сайт или командную строку",
            correct: true,
          },
          {
            answer: "Лишь через терминал (командную строку)",
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "HTML",
    on: true,
    questions: [
      {
        id: 1,
        question: "Где верно записан DOCTYPE для HTML5 версии?",
        answers: [
          {
            answer: "<!DOCTYPE html5>",
            correct: false,
          },
          {
            answer: "<DOCTYPE html>",
            correct: false,
          },
          {
            answer: "<DOCTYPE html5>",
            correct: false,
          },
          {
            answer: "<!DOCTYPE html>",
            correct: true,
          },
        ],
      },
      {
        id: 2,
        question: "Где верно создан комментарий?",
        answers: [
          {
            answer: "<-- текст --!>",
            correct: false,
          },
          {
            answer: "<!-- текст -->",
            correct: true,
          },
          {
            answer: "<-- текст -->",
            correct: false,
          },
          {
            answer: "// --- //",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "Какой тег не используется при работе с таблицами?",
        answers: [
          {
            answer: "Tr",
            correct: false,
          },
          {
            answer: "Td",
            correct: false,
          },
          {
            answer: "Tt",
            correct: true,
          },
          {
            answer: "Th",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question: "Для чего используют тег div?",
        answers: [
          {
            answer: "Для блочной верстки сайта",
            correct: true,
          },
          {
            answer: "Для создание таблиц",
            correct: false,
          },
          {
            answer: "Для работы с текстом",
            correct: false,
          },
          {
            answer: "Для работы с видео",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "Все input теги стоит записывать в теге...",
        answers: [
          {
            answer: "fields",
            correct: false,
          },
          {
            answer: "form",
            correct: true,
          },
          {
            answer: "table",
            correct: false,
          },
          {
            answer: "section",
            correct: false,
          },
        ],
      },
    ],
  },
];
