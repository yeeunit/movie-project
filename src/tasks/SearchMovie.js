import React, { useState } from 'react'
import { getDate } from '../etc/utils'

const SearchMovie = () => {

    const [keyword, setKeyword] = useState()
    const [result, setResult] = useState()

    const onChangeKeyword = (event) => {
        setKeyword(event.target.value)
    }

    const onClickSearch = async () => {
        let url = `http://localhost:3001/new?search=${keyword}`
        let response = await fetch(url)
        let data = await response.json()

        let url2 = `http://localhost:3001/new?actor=${keyword}`
        let response2 = await fetch(url2)
        let data2 = await response2.json()
        // console.log(data)
        
        setResult(data)
        setResult2(data2)
    }
    // console.log('result', result)
    // console.log('title', result&& result[0].title)
    // let title = 
    // result&& result[{index}].title
    // result&& result.map((el, index) => (
    //     <span> {el[{index}].title} </span>
    //         ))
        

    // console.log('title', title)
    // console.log('result',keyword,'검색결과는', result)


    // 출연자 전체정보
    // const [actor, setActor] = useState('')
    const [result2, setResult2] = useState()

//     const onChangeActor = (event) => {
//     event.preventDefault();
//     setActor(event.target.value)
//   }
  // console.log('setActor', actor)

//   const onClickSearch2 = async () => {
//     let url2 = `http://localhost:3001/new?actor=${keyword}`
//     let response2 = await fetch(url)
//     let data2 = await response2.json()
//     // console.log(data)
//     setResult2(data2)
//   }
//   console.log('setResult2', result2)


  return (
    <><hr/>
    {/* <h5>📌 영화 검색하기</h5> */}
    <h5>📌 배우명으로 영화 검색하기</h5>

    <input
        type='search'
        placeholder='배우 이름을 입력하세요'
        style={{width:"200px"}}
        onChange={onChangeKeyword}
    />
    <button onClick={onClickSearch}> 검색</button> <br/><br/>

    {/* {result && 
        result.map((el) => (
        <>
            <h5>&#60;{el.title}&#62;</h5>
            <ul>
                <span><img src={el.image} height={100} /></span>
                <li> 출연 : {el.actor}</li>
                <li> 역할 : {el.character}</li>
                <li> 개봉일 : {getDate(el.date)}</li>
                <li> 장르 : {el.genre} </li>
                <li> 상영시간 : {el.runtime}분</li> 
                <li> 평점 : {el.rate}점</li>
            </ul>
        </>
        ))
    }

    전체 출연배우 : 
    {result2 && 
        result2.map((el,index) => (
            <div>
              <span>{el.movie} </span>
                <span> - &gt; {el.actor}</span>
            </div> 
        ))}  */}


    {result && result2 && 
        result.map((el) => (
        <>
            <h5>&#60;{el.title}&#62;</h5>
            <ul>
                <span><img src={el.image} height={100} /></span>
                <li> {el.actor} <span> ⇢ "{el.character}" 역</span></li>

                <li>출연배우 :
                    {result2 && 
                    result2.map((item) => (
                    <> {el.title === item.movie ? (<span> {item.actor},</span>) : <></>} </> 
                    ))}
                ...</li>

                <li> 개봉일 : {getDate(el.date)}</li>
                <li> 장르 : {el.genre} </li>
                <li> 상영시간 : {el.runtime}분</li> 
                <li> 평점 : {el.rate}점</li>

                
            </ul>
        </>
        ))
    }
    

    {/* 전체 출연배우 : 
    {result2 && 
        result2.map((el,index) => (
            <div>
              <span>{el.movie} </span>
                <span> - &gt; {el.actor}</span>
            </div> 
        ))
        }  */}
    
    </>
)}

export default SearchMovie