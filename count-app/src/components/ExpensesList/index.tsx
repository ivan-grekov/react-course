import React from "react";
import "./ExpensesList.scss";
import ExpenseItem from "../ExpenseItem";
import { IExpenseItem } from "../Expenses";

const ExpensesList: React.FC<{ expenses: IExpenseItem[] }> = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.length === 0 ? (
        <h2 className="expenses-list__fallback">Sorry no expenses yet.</h2>
      ) : (
        expenses.map((expense) => <ExpenseItem {...expense} key={expense.id} />)
      )}
    </ul>
  );
};

export default ExpensesList;
