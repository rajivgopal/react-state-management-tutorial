import React from "react";

const Movie = ({ movie }) => {
  return (
    <>
      <span> {movie.name}</span> <span>{movie.price}</span>
      <br />
    </>
  );
};

export default Movie;
