import React from "react";
import { CircularProgress } from "@mui/material";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";
import useFetchData from "./hooks/use-fetchData";

function App() {
  const { movies, error, isLoading, getMoviesHandler, addMovieHandler } =
    useFetchData();

  const content =
    movies.length === 0 && !error ? (
      <p>Not movies yet.</p>
    ) : (
      <MoviesList movies={movies} />
    );

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
