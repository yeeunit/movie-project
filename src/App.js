import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TodoList } from "./components/TodoList";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";
import ServerTest from "./pages/ServerTest";
import MovieDB from "./pages/MovieDB";
import MovieDB_Detail from "./pages/MovieDB_Detail";
import MovieDB_Search from "./pages/MovieDB_Search";
import NewPage from "./pages/NewPage";
import QueryBuilderPage from "./components/QueryBuilder";

function App() {
  return (
    <>
      {/* <h1>Searching movies</h1> */}

      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/moviedb" element={<MovieDB />} />
        <Route path="/moviedb/:id" element={<MovieDB_Detail />} />
        {/* <Route path="/movie/search?" element={<MovieDB_Search />} /> */}
        <Route path="/new" element={<NewPage/>}/>
        <Route path="/querybuilder" element={<QueryBuilderPage/>} />
        {/* <Route path="/todolist" element={<Movies />} /> */}
        {/* <Route path="/calculator" element={<ServerTest />} /> */}
      </Routes>

      {/* <TodoList /> */}
    </>
  );
}

export default App;
