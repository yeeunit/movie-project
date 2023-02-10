import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const MovieSlide = ({movies}) => {

    console.log('movies', movies)

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },

      };
     
  return (
  <>
        <div>MovieSlide</div>

      {movies.results  &&
        <Carousel responsive={responsive}>
         
              {movies.results.map((item)=>(
                <MovieCard item={item} />
              )
              )}
         
        </Carousel>
        }
  </>)
}

export default MovieSlide