import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { id: 1, name: "Thenali", price: "10$" },
    { id: 2, name: "Thevar Magan", price: "15$" },
    { id: 3, name: "Nayagan", price: "20$" }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
