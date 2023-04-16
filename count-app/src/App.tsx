import React from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { DUMMY_EXPENSES } from "./static/data";

export interface INewExpense {
  title: string;
  amount: number;
  date: Date;
  id: string;
}

function App() {
  const [expenses, setExpenses] = React.useState(DUMMY_EXPENSES);

  const addExpensesHandler = (newExpense: INewExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <>
      <NewExpense onAddNewExpense={addExpensesHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
