import React, { useEffect, useState } from 'react'

const SearchWithActor = () => {

  const [actor, setActor] = useState('')
  const [result, setResult] = useState()

  const onChangeGenre = (event) => {
    event.preventDefault();
    setGenre(event.target.value)
  }
//   console.log('setGenre', genre)

  const getSearch = async () => {
    let url = `http://localhost:3001/new?genre=${genre}`
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data)
    setResult(data)
  }
  // console.log('setResult', result)
  // console.log('setResult', result&&result[0].name)

  const onClickSearch = () => {
    getSearch();
  };

  return (
    <>
    <hr/><h5>📌 </h5>

    <form action='/new' method='get' id='movieGenre'
    style={{display:"inline-block"}} 
    >
      <select 
        name='genre' 
        form='movieGenre'
        value={genre}
        onChange={onChangeGenre}>
        <option selected disabled>장르를 선택하세요</option>
        <option value="Animation">애니메이션</option>
        <option value="Action">액션</option>
        <option value="Comedy">코미디</option>
        <option value="Romance">로맨스</option>
        <option value="Family">가족</option>
        <option value="Horror">공포</option>
      </select>

        {/* 장르선택 <input type='text' name='name'/> */}
        {/* <input type='submit'onClick={onClickSearch}/> */}
    </form>   
    <button onClick={onClickSearch}>검색</button>
   
    <div>
      {/* {result[0]&&
        <div>{result.name}</div>
      } */}
      <ul>
      {result&&result.map((el,index)=>
      (
        <li>{el.name}</li>
      ))
    }
    </ul>
    <hr/>
    </div>
    </>
  )
}

export default SearchWithActor