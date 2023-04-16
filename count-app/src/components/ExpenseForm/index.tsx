import React from "react";
import "./ExpenseForm.scss";
import { IExpenseData } from "../NewExpense";

interface IExpenseForm {
  onSaveExpenseData: (data: IExpenseData) => void;
}

const ExpenseForm: React.FC<IExpenseForm> = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = React.useState({
    enteredTitle: "",
    enteredAmount: 0,
    enteredDate: "",
  });

  const [formActive, setFormActive] = React.useState(false);

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: value,
      };
    });
  };

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: Number(value),
      };
    });
  };

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: value.replaceAll("-", ", "),
      };
    });
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: 0,
      enteredDate: "",
    });

    setFormActive(false);
  };

  const formContentActive = (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => setFormActive(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  const formContentUnActive = (
    <form>
      <button onClick={() => setFormActive(true)}>Add new expense</button>
    </form>
  );

  return <>{formActive ? formContentActive : formContentUnActive}</>;
};

export default ExpenseForm;
