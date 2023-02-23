import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieInsert from '../components/MovieInsert'

const MovieDB = () => {

    const [data, setData] = useState()

    const getMyDB = async () => {
        let url = `http://localhost:3001/movies`
        let response = await fetch(url)
        let data = await response.json()
        setData(data)
    }
    // console.log('data', data)

    useEffect(() => {
        getMyDB()
      }, []);

        
    // 검색하기
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState({});

    const onChangeKeyword = (event) => {
        setKeyword(event.target.value);
        // console.log("keyword", keyword);
      };

    const getSearch = async () => {
        // let url = `http://localhost:3001/search?name=${keyword}`;
        let url = `http://localhost:3001/search?name=${keyword}&actor=${keyword}`;
        // let url = `http://localhost:3001/search/actors?actor=${keyword}`;
        let response = await fetch(url);
        let data = await response.json();
        setResult(data);
      };

    // console.log('result', result)

    const onClickSearch = () => {
        getSearch();
      };

  return (
    <>
    <h1>Movie List</h1>


    <input
      type="search"
      placeholder="영화 제목 또는 배우명을 입력하세요"
      onChange={onChangeKeyword}
      style={{width:'250px'}}
    />
    <button onClick={onClickSearch}> 검색</button>
    <br/><br/><br/>
    <div>
        <h4>검색결과..</h4>
      
        {/* {result[0]&& result[0].name} */}
        
        {result[0]&& 
           <div>
             {result.map((el, index) => (
              <div key={index}> 
              ID : {el.id} / 
              {/* 영화제목 : {el.name} / */}
              영화제목 : {el.name
              .replaceAll(keyword, `***${keyword}***`).split("***").map((el)=>(
                <span style={{color: keyword === el?"blue":"black"}}>
                  {el}
                </span>
              ))} /

              출연배우 :  
                {el.actors.map((name, index) => (
                <span key={index} >{name}, </span> 
              ))} ... / 
              
              상영시간 : {el.runtime}분
                <div><img width={50} src={el.image} /></div>

              </div>
             ))}
           </div>
        }

    </div>


    <br/><hr/><br/>
    <h1>DB 리스트</h1>
    <div  >
    {data &&
        <div className='db_list_style'> 
             {data.map((item, index) => (
             <div className='db_box'>
                 <h5>No.{item.id}</h5> 
                 <h3>&#60;{item.name}&#62;</h3> 
                 <div> 장르:{item.genre} / {item.adult ? "(청불!)" : "(청소년 관람 가능)"} </div>
                 <img 
                 width={100}
                 src={item.image}/>
                 <div>출연배우: {item.actors}...</div>

                 <br/><br/>
             </div>
             ))}
        </div>
        }
        </div>
 </>
  )
}

export default MovieDB