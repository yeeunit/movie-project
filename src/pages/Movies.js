import React from "react";
import MovieSearch from "../components/MovieSearch";
import { TodoList } from "../components/TodoList";

const Movies = () => {
  return (
    <div className="movies_page">
      <MovieSearch />
      <TodoList/>

    </div>
  );
};

export default Movies;
