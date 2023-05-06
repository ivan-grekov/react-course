import React from "react";

import classes from "./Movie.module.css";

export interface IMovie {
  episode_id: number;
  title: string;
  opening_crawl: string;
  release_date: string;
}

const Movie: React.FC<IMovie> = ({ title, release_date, opening_crawl }) => {
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <p>{opening_crawl}</p>
    </li>
  );
};

export default Movie;
