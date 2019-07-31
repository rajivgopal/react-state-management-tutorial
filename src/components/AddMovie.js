import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const addName = event => {
    setName(event.target.value);
  };

  const addPrice = event => {
    setPrice(event.target.value);
  };

  const addMovie = event => {
    event.preventDefault();
    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: Math.random() }
    ]);
  };

  return (
    <>
      <label>Movie Name:</label>
      <input type="text" name="movie" onChange={addName} />
      <br />
      <label> Price:</label>
      <input type="text" name="price" onChange={addPrice} />
      <br />
      <button value="Add Movie" onClick={addMovie}>
        Add Movie
      </button>
      <br />
      <br />
    </>
  );
};

export default AddMovie;
