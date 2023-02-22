import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

// const API_KEY = "f914afd35da285b8249f50aae6a678d5";

const MovieDB_Search = ({results}) => {

  console.log(results)

  // useEffect(() => {
  //   if (results[0]) {
  //     console.log(results[0].name);
  //   }
  // }, []);
  
//  console.log('movie', movie[0]&& movie[0].name)

  // {aaa &&
  //   <h5> test : 
  //     {aaa.map((item, index) => (
  //      <span key={index}> {item.name}</span>
  //     ))}
  //   </h5>
  //   }

  // const [searchList, setSearchList] = useState([]);
  // const [query, setQuery] = useSearchParams();

  // const getResults = async () => {
  //   let searchQuery = query.get("q") || "";
  //   //=>q로 시작하는 아이템을 가져와서 searchQuery에 넣어줘라. 값이 없으면 빈 스트링을 넣어주겠다
  //   console.log("쿼리값은?", searchQuery);
  //   let url = `http://localhost:5000/products?q=${searchQuery}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setSearchList(data);
  // };

  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.toString();
  // console.log(searchParams);
  // let { search } = useParams();
  // console.log("search", search);

  return (
    <>
      
      {/* {movie[0]&& movie[0].name} */}

      {/* {results[0]? 
           <ul>
             {results.map((el, index) => (
              <li key={index}> 
              {el.id} / 
              {el.name} / 
              </li>
             ))}
           </ul>
        : 
        <div>...</div>
        } */}
    </>
  );
};

export default MovieDB_Search;
