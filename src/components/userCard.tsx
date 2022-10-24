import { useState } from "react";
import "../styles/user-card.css";

interface UserCardProps {
  name: string;
  tests: any[];
  id: string;
  openTest: any
}
export const UserCard = (props: UserCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="user-card">
      <h3 className="user-card_name">{props.name}</h3>
      <div className="user-card_select_wrapper">
        <div className={isOpen ? "user-card_select opened": "user-card_select"} onClick={() => setIsOpen(!isOpen)}>
          <h4>Тесты</h4>
        </div>
        {isOpen && (
          <div className="user-card_tests" id={props.id}>
            {props.tests.map((el) => (
              <span key={el.id} className="user-card_tests_item" onClick={props.openTest} id={el.id}>
                {el.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
