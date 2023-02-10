import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {TodoList} from './components/TodoList'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import Navigation from './components/Navigation';



function App() {
  return (
  <>
  
  {/* <h1>Searching movies</h1> */}
  
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MovieDetail/>} />
      </Routes>

      {/* <TodoList /> */}
  </>
  )
}

export default App;
