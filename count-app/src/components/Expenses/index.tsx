import React from "react";
import ExpensesFilter from "../ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "../ExpensesList";
import ExpensesChart from "../ExpensesChart";

export interface IExpenseItem {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const Expenses: React.FC<{ items: IExpenseItem[] }> = ({ items }) => {
  const [selectedDate, setSelectedDate] = React.useState("2023");
  const [filteredExpenses, setFilteredExpenses] = React.useState(items);

  const selectDateHandler = (date: string) => setSelectedDate(date);

  React.useEffect(() => {
    const filteredExpenses = items.filter(
      (exp) => exp.date.getFullYear() === Number(selectedDate)
    );
    setFilteredExpenses(filteredExpenses);
  }, [selectedDate, items]);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedDate}
          onSaveSelectedDate={selectDateHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
