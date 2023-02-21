import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDB_Detail = () => {

    let {id} = useParams()
    const [data, setData] = useState(null)

    const getMovieDetail = async () => {
        let url = `http://localhost:3001/movies/${id}`
        let response = await fetch(url)
        let data = await response.json()
        setData(data[0])
    }
    console.log('data', data)

    useEffect(() => {
        getMovieDetail()
      }, []);


  return (
    <div>
    <h1>Movie Detail</h1>

    {data &&
         <div>
             <h2>{data.id}. {data.name}</h2> 
             <h4> 장르: {data.genre} {data.adult ? "청불" : "(청소년 관람 가능)"} </h4>
             <img 
             width={100}
             src={data.image}/>
             <br/><br/>
         </div>

    }   
    </div>
  )
}

export default MovieDB_Detail