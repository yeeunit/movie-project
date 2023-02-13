import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
// import {useSearchParams} from "react-router-dom"

const MovieCard = ({ item }) => {
  // console.log({item})
  const { genreList } = useSelector((state) => state.movie);

  return (
    <>
      <div
        className="movie_card" 
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
            ")",
        }}
      >
        <div className="overlay">
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
