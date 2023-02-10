import React, { useEffect } from 'react'
import {movieAction} from "../redux/actions/moiveAction"
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {

  const dispatch = useDispatch()
  const {popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(
    (state) => state.movie
    )
  // console.log('popularMovies', popularMovies)

  useEffect(()=>{
    dispatch(movieAction.getMovies())
  }, [])


  if (loading) {
    return ( 
      <ClipLoader
        color="white"
        loading={loading}
        size={150}
      />
    )
  }

  return (
    <>
    {/* <h1>HOME</h1> */}
    <div className='home_wrapper'>
      {/* {popularMovies.results &&  */}
      <Banner movie={popularMovies.results[0]}/>
      {/* } */}

        <h1>Popular Movies</h1>
          <MovieSlide movies={popularMovies} />

        <h1>Top Rated Movies</h1>
          <MovieSlide movies={topRatedMovies} />

        <h1>Upcoming Movies</h1>
          <MovieSlide movies={upcomingMovies} />

    </div>
    </>
  )
}

export default Home