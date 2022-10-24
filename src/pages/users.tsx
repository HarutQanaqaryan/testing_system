import { useState } from "react";
import { NavBar } from "../components/navBar";
import { StatisticModal } from "../components/statisticModal";
import { UserCard } from "../components/userCard";
import {
  checkAverageScore,
  checkCorrectAnswers,
} from "../helpers/checkStatistic";
import { mockUsers } from "../helpers/fakeUsers";
import "../styles/users.css";

export const Users = () => {
  const [currUserTests, setCurrUserTests] = useState<any>([]);
  const [testStatistics, setTestStatistic] = useState<any[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleId = (e: any) => {
    let test: any[] = [];
    mockUsers.map((el) => {
      if (Number(e.target.parentElement.id) === el.id) {
        test = el.tests.filter((el: any) => el.id === Number(e.target.id));
      }
      return test;
    });
    test.map((el) => setCurrUserTests(el.attempts));
    test.map((el) =>
      setTestStatistic([
        {
          name: el.name,
          numAttempts: el.attempts.length,
          success: checkCorrectAnswers(el.attempts),
          averageScore: Math.ceil(checkAverageScore(el.attempts)),
        },
      ])
    );
    setIsModal(true);
  };

  return (
    <div className="users-wrapper">
      <NavBar />
      <h1 className="tests-header">Пользователи</h1>
      <div className="users_list">
        {mockUsers.map((el) => (
          <UserCard
            name={el.name}
            tests={el.tests}
            key={el.id}
            openTest={handleId}
            id={el.id}
          />
        ))}
        {isModal && (
          <StatisticModal
            currentTests={currUserTests}
            statistic={testStatistics}
            close={() => setIsModal(!isModal)}
          />
        )}
      </div>
    </div>
  );
};
