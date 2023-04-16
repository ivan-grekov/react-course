import React from "react";
import "./NewExpense.scss";
import ExpenseForm from "../ExpenseForm";
import { INewExpense } from "../../App";

export interface IExpenseData {
  title: string;
  amount: number;
  date: Date;
}

const NewExpense: React.FC<{
  onAddNewExpense: (expense: INewExpense) => void;
}> = ({ onAddNewExpense }) => {
  const saveExpenseDataHandler = (eneteredExpenseData: IExpenseData) =>
    onAddNewExpense({
      ...eneteredExpenseData,
      id: Math.random().toString(),
    });

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
