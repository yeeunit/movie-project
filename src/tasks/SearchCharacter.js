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
    <h5>📌 영화별 캐릭터 확인하기</h5>

      <input 
      type='search'
      placeholder='영화 제목을 입력하세요'
      style={{width:"200px"}}
      onChange={onChangeMovie}
      />
    <button onClick={onClickSearch}> 검색</button>
   
    {/* <br/> &lt;{movieName} &gt; */}
      {/* <div>
      {result&& 
      result.map((el)=>(
        <div>       
        <span>"{el.character}" 역</span> 
        <span> ⇢ {el.sex === 1? <>🙎‍♂️</> : <>🙍‍♀️</>} {el.actor}</span>
        </div>
      ))}
      </div> */}
      
    <hr/>
    </>
  )
}

export default Search_Movie_Final