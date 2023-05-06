import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";
import { IMovie } from "./Movie";

const MovieList: React.FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie: IMovie) => (
        <Movie key={movie.episode_id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
