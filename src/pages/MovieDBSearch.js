import React from 'react'

const MovieDBSearch = () => {

    let {id} = useParams()
    const [data, setData] = useState()

    const getMyDB = async () => {
        let url = `http://localhost:3001/search`
        let response = await fetch(url)
        let data = await response.json()
        setData(data)
    }
    // console.log('data', data)

    useEffect(() => {
        getMyDB()
      }, []);


  return (
    <>
    <h1>Movie Search Page</h1>

    {data &&
        <div> 
             {data.map((item, index) => (
             <div>
                 <h2>{item.id}. {item.name}</h2> 
                 <h4> 장르: {item.genre}{item.adult ? "청불" : "(청소년 관람 가능)"} </h4>
                 <img 
                 width={100}
                 src={item.image}/>
                
                 <br/><br/>
             </div>
             ))}
        </div>
        }
 </>
  )
}

export default MovieDBSearch