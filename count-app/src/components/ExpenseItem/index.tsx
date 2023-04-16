import React from "react";
import "./ExpenseItem.scss";
import ExpenseDate from "../ExpenseDate";
import Card from "../UI/Card";

export interface ExpenseProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem: React.FC<ExpenseProps> = ({ title, amount, date }) => {
  const [currentTitle, setCurrentTitle] = React.useState(title);
  const clickHandler = () => setCurrentTitle("Updated!");

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{currentTitle}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
