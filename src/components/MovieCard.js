import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  // console.log({item})
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate()
  const onClickMove = (event) => {
    navigate(`/movies/${item.id}`)
  }
  
  return (
    <>
      <div
        onClick={onClickMove}

        // onClick={(e)=>{clickHandler(params, e)}}
        className="movie_card" 
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
            ")",
        }}
      >
        <div 
        className="overlay"
        
        id={item.id}>
          <h3>{item.title}</h3>
          <div>
            {item.genre_ids.map((i) => (
              <Badge bg="danger" className='genre_badge' >
                {genreList.find((item) => item.id === i).name}
              </Badge>
            ))}
          </div>
          <div>⭐️ {item.vote_average}</div>
          <span className="movie_card_overview"> {item.overview}</span>
          <div className='release_date'> Release Date: {item.release_date}</div>

          <div>{item.adult ? "청불" : ""}</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
