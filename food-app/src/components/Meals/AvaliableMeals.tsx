import React, { useEffect, useState } from "react";
import styles from "./AvaliableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";
export const BASE_URL = "https://react-http-45a66-default-rtdb.firebaseio.com";

export interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvaliableMeals: React.FC = () => {
  const [meals, setMeals] = useState<IMeal[] | undefined>([]);
  const { getData, httpError } = useHttp(`${BASE_URL}/meals.json`);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    try {
      getData().then((data) => {
        setMeals(data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <p>{httpError.message}</p>
      </section>
    );
  }

  const mealsList = meals?.map((meal: IMeal) => (
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
