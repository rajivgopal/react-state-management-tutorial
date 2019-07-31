import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const NavBar = () => {
  const [movies] = useContext(MovieContext);
  return (
    <>
      <span>The number of movies in shelf : {movies.length}</span>
      <br />
      <br />
    </>
  );
};

export default NavBar;
