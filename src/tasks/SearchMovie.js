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
        setResult(data)
    }
    // console.log('result',keyword,'검색결과는', result)

  return (
    <><hr/>
    <h5>📌 영화 검색하기</h5>

    <input
        type='search'
        placeholder='배우 이름을 입력하세요'
        style={{width:"200px"}}
        onChange={onChangeKeyword}
    />
    <button onClick={onClickSearch}> 검색</button> <br/><br/>

    {result && 
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
                {/* {if ({el.adult}) 
                ? 
                <>청불</> 
                :
                <>청불아님</>} */}
                    
        
       
        </>
        ))
    }

    </>
)}

export default SearchMovie