import React from "react";
import styles from "./AvaliableMeals.module.css";
import { DUMMY_MEALS } from "../../static/dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvaliableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal: IMeal) => (
    <MealItem {...meal} key={meal.id} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaliableMeals;
