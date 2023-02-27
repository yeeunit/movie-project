import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, { useEffect, useState } from 'react'

const Search_Movie_Final = () => {

  const [movieName, setMovieName] = useState('')
  const [result, setResult] = useState()

  const onChangeMovie = (event) => {
    // event.preventDefault();
    setMovieName(event.target.value)
  }

  const onClickSearch = async () => {
    let url = `http://localhost:3001/new?aaa=${movieName}`
    let response = await fetch(url)
    let data = await response.json()
    setResult(data)
  }
  console.log('result', result)

  return (
    <>
    <h5>📌 배우명으로 영화정보 검색하기</h5>

      <input 
      type='search'
      placeholder='영화 제목을 입력하세요'
      style={{width:"200px"}}
      onChange={onChangeMovie}
      />
    <button onClick={onClickSearch}> 검색</button>
   
    {/* <br/> &lt;{movieName} &gt; */}

      <div>
      {result&& 
      result.map((el)=>(
        <div>   
        <h4>{el.title}</h4>
        <div><img src = {el.image}  height={100} /></div> 
        <div>출연 : {el.actor} ,</div> 
        <div>등장인물 : {el.character} ...</div> 
        <div>개봉일 : {el.date}</div> 
        <div>장르: {el.genre}</div> 
        <div> 등급 : {el.adult ? <>청불</> : <>전체관람</>} </div>

        </div>
      ))}
      </div>
      
    </>
  )
}

export default Search_Movie_Final