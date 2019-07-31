import React from "react";
import NavBar from "./NavBar";
import Movies from "./Movies";
import MovieProvider from "./MovieContext";
import AddMovie from "./AddMovie";

const MovieMain = () => {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <AddMovie />
        <Movies />
      </MovieProvider>
    </>
  );
};

export default MovieMain;
