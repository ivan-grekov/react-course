import React from "react";
import "./ExpensesFilter.scss";

const ExpensesFilter: React.FC<{
  onSaveSelectedDate: (date: string) => void;
  selected: string;
}> = ({ onSaveSelectedDate, selected }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={selected}
          onChange={(e) => onSaveSelectedDate(e.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
