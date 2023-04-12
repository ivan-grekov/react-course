import ExpenseItem from "./components/ExpenseItem";
import { expenses } from "./static/data";

function App() {
  return (
    <div>
      {expenses.map((exp) => (
        <ExpenseItem {...exp} key={exp.id} />
      ))}
    </div>
  );
}

export default App;
