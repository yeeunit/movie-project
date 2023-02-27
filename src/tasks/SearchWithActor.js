import React, { useEffect, useState } from 'react'

const SearchWithActor = () => {

  const [actor, setActor] = useState('')
  const [result, setResult] = useState()

  const onChangeActor = (event) => {
    event.preventDefault();
    setActor(event.target.value)
  }
  // console.log('setActor', actor)

  const onClickSearch = async () => {
    let url = `http://localhost:3001/new?actor=${actor}`
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data)
    setResult(data)
  }
  console.log('setResult', result)

  // console.log('result.length', result&& result.length)
    let arr = []
    let len = result&& result.length
    let lastmovie = result&& result[len-1].movie
    console.log('last', lastmovie)


    // for (let i=0; i<len; i++){
    //   if (result[i].movie !== result[i+1].movie) {
    //       arr.push(result[i].movie)
    //       console.log('arr', arr)
    //     }
    // } 
  
  // arr.push(lastmovie)
  // console.log('arr', arr)


  return (
    <>
    <hr/><h5>📌 배우명 검색시 해당 영화 정보와 전체 출연배우 이름 받아오기</h5>

    <input
        type='search'
        placeholder='배우 이름을 입력하세요'
        style={{width:"200px"}}
        onChange={onChangeActor}
    />
    <button onClick={onClickSearch}> 검색</button> <br/><br/>


    {/* {result && 
        result.map((el) => (
            <div>
                <div> movie : {el.movie}</div>
                <div> actor : {el.actor}</div>
                <div> character : {el.character}</div>
                <hr/>
            </div> 
        ))} */}


              {/* movie : {
                (el[index].movie === el[index+1].movie) ? <>"ㅇ" </> : <>{el.movie}</>
                } */}
                {/* <span> {el[index].actor}</span> */}

    {/* 출연배우 :  */}
    {result && 
        result.map((el,index) => (
            <div>
              <span>{el.movie} </span>
              {/* <span> 
              {el[index]&& el[index].movie } 
                {el[index]&& 
                  el[index].movie === el[index+1].movie
                  ? <>{el[index].movie}</>
                  : <>x</>
                } 
              / </span> */}
              {/* <li> 출연배우 :  */}
                <span> - &gt {el.actor}</span>
                {/* </li> */}
              {/* <li> 역할 : {el.character}</li>  */}

            </div> 
        ))} 

    </>
  )
}

export default SearchWithActor