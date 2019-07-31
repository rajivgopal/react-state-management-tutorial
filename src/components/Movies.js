import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const Movies = props => {
  const [movies] = useContext(MovieContext);
  return (
    <>
      {movies.map(movie => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </>
  );
};

export default Movies;
