import React from "react";
import styles from "./AvaliableMeals.module.css";
import { DUMMY_MEALS } from "../../static/dummy-meals";

interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvaliableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal: IMeal) => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvaliableMeals;
