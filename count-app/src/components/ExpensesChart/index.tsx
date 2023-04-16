import React from "react";
import Chart from "../Chart";
import { IExpenseItem } from "../Expenses";

const ExpensesChart: React.FC<{ expenses: IExpenseItem[] }> = ({
  expenses,
}) => {
  const chartDataPoints = [
    { id: "m1", label: "Jan", value: 0 },
    { id: "m2", label: "Feb", value: 0 },
    { id: "m3", label: "Mar", value: 0 },
    { id: "m4", label: "Apr", value: 0 },
    { id: "m5", label: "May", value: 0 },
    { id: "m6", label: "Jun", value: 0 },
    { id: "m7", label: "Jul", value: 0 },
    { id: "m8", label: "Aug", value: 0 },
    { id: "m9", label: "Sep", value: 0 },
    { id: "m10", label: "Oct", value: 0 },
    { id: "m11", label: "Nov", value: 0 },
    { id: "m12", label: "Dec", value: 0 },
  ];

  expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
