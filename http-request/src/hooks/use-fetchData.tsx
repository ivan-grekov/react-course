import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";
import { IMovie } from "../components/Movie";
const BASIC_URL: string = "https://swapi.dev/api";
const FIRE_URL: string =
  "https://react-http-45a66-default-rtdb.firebaseio.com/movies.json";

const useFetchData = () => {
  const [movies, setMovies] = useState([]);
  const [fetchMovies, setFetchMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState<AxiosError>();

  const getMoviesHandler = useCallback(async () => {
    setFetchMovies(true);
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${BASIC_URL}/films`);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
      setMovies([]);
      if (err instanceof AxiosError) setIsError(err);
    }
    setIsLoading(false);
  }, []);

  const addMovieHandler = useCallback(async (movie: Partial<IMovie>) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: FIRE_URL,
        data: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (fetchMovies) getMoviesHandler();
    return () => {
      setFetchMovies(false);
    };
  }, [fetchMovies, getMoviesHandler]);

  return {
    movies,
    isLoading,
    error,
    getMoviesHandler,
    addMovieHandler,
  };
};

export default useFetchData;
