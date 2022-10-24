import "../styles/statistic-modal.css";
import close from "../assets/close.svg";

interface StatisticModalProps {
  currentTests: any[];
  statistic: any[];
  close: any
}
export const StatisticModal = (props: StatisticModalProps) => {
  return (
    <div className="statistic-modal">
      <img src={close} alt="Закрыть" className="statistic-close" onClick={props.close}/>
      <div>
        {props.statistic.map(({ name, averageScore, numAttempts, success }) => (
          <div key={Math.random()} className="current_statistic">
            <h3>{name}</h3>
            <p>Попытки: {numAttempts}</p>
            <p>
              Успешно пройденные: {success} / {success}%
            </p>
            <p>Средний балл: {averageScore}</p>
          </div>
        ))}
        <div className="test-statistic">
          <h3>Все попытки</h3>
          {props.currentTests.map(
            ({ correctAnswers, date, time, timeSpent }) => (
              <div key={Math.random()} className="test-statistic_item">
                <p>
                  Дата: {date} Время: {time}
                </p>
                <p>Pатрачено на прохождение: {timeSpent} мин.</p>
                <p>Количество правильных ответов: {correctAnswers}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
