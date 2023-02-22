import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const API_KEY = "f914afd35da285b8249f50aae6a678d5";

const MovieDetail = () => {
  // console.log(props);
  // const dispatch = useDispatch();
  // const { movieDetails } = useSelector((state) => state.movie);
  // // console.log('movieDetails', movieDetails)
  // useEffect(() => {
  //   dispatch(movieAction.getMovies());
  // }, []);


  let { id } = useParams()
  const [movie, setMovie] = useState(null);

  const getMovieDetail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    let response = await fetch(url)
    let data = await response.json()
    // console.log('title', data.title)
    setMovie(data)
  }
  console.log('movie', movie)

  useEffect(() => {
    getMovieDetail()
  }, []);

  
  return (
    <div className='movie_detail_page'>

      {movie ? 
        <>
          <h1> {movie.title} </h1>
          <img src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path}`}/>
          
           {movie.genres &&
           <h5> 장르 : 
             {movie.genres.map((item, index) => (
              <span key={index}> {item.name}</span>
             ))}
           </h5>
           }
          
          <h5>{movie.adult ? "청불" : "(청소년 관람 가능)"}</h5>
          <h5>평점 {movie.popularity}점</h5>
          <h5> Release Date: {movie.release_date}</h5>
          <h5> Running Time: {movie.runtime} min</h5>
          <h5 > Overview</h5>  
          {movie.overview}
        </> 
        : 
        <div>로딩중...</div>}

    </div>
  )
}

export default MovieDetail