import React from "react";
import axios, { AxiosError } from "axios";
import { CircularProgress } from "@mui/material";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";
import { IMovie } from "./components/Movie";

const BASIC_URL: string = "https://swapi.dev/api";
const FIRE_URL: string =
  "https://react-http-45a66-default-rtdb.firebaseio.com/movies.json";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [fetchMovies, setFetchMovies] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setIsError] = React.useState<AxiosError>();

  const getMoviesHandler = React.useCallback(async () => {
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

  React.useEffect(() => {
    if (fetchMovies) getMoviesHandler();
    return () => {
      setFetchMovies(false);
    };
  }, [fetchMovies, getMoviesHandler]);

  const content =
    movies.length === 0 && !error ? (
      <p>Not movies yet.</p>
    ) : (
      <MoviesList movies={movies} />
    );

  const addMovieHandler = async (movie: Partial<IMovie>) => {
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
  };
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={getMoviesHandler}>
          {isLoading ? (
            <CircularProgress style={{ width: "25px", height: "25px" }} />
          ) : (
            "Fetch Movies"
          )}
        </button>
      </section>
      <section>
        {content}
        {error && <p>{error.message}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
