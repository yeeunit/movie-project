import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/moiveAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import { useSearchParams } from "react-router-dom";

const API_KEY = "f914afd35da285b8249f50aae6a678d5";

const Home = () => {
  const dispatch = useDispatch();
  const {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    loading,
  } = useSelector((state) => state.movie);
  // console.log('popularMovies', popularMovies)

  const [query, setQuery] = useSearchParams();
  let searchQuery = query.get("q") || "";
  console.log("쿼리값은??", searchQuery);
  // let url = `http://localhost:5000/movies?q=${searchQuery}`;
  let url = `https://api.themoviedb.org/3"/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1?q=${searchQuery}`;

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, [query]);

  if (loading) {
    return <ClipLoader color="white" loading={loading} size={150} />;
  }

  return (
    <>
      <div className="home_wrapper">
        {/* {popularMovies.results &&  */}
        <Banner movie={popularMovies.results[0]} />
        {/* } */}

        <div className="movie_slide_wrapper">

            <div className="movie_slide">
              <h1>Popular Movies</h1>
              <MovieSlide movies={popularMovies} />
            </div>
          
            <div className="movie_slide">
              <h1>Top Rated Movies</h1>
              <MovieSlide movies={topRatedMovies} />
            </div>
  
            <div className="movie_slide">
              <h1>Upcoming Movies</h1>
              <MovieSlide movies={upcomingMovies} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
