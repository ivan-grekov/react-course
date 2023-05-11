import { useState } from "react";
import axios from "axios";

const useHttp = (url: string) => {
  const [httpError, setHttpError] = useState<Error>();
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      if (data === null) {
        throw new Error("Something went wrong with getting data");
      }
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      return loadedMeals;
    } catch (error) {
      if (error instanceof Error) setHttpError(error);
    }
  };
  return {
    getData,
    httpError,
  };
};

export default useHttp;
