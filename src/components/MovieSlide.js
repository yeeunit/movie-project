import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const MovieSlide = ({movies}) => {

    // console.log('movies', movies)

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
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }

      };
     
  return (
  <>

      {movies.results  &&
        <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500} 
        // rtl={true}
        >
         
              {movies.results.map((item)=>(
                <MovieCard item={item} />
              )
              )}
         
        </Carousel>
        }
  </>)
}

export default MovieSlide