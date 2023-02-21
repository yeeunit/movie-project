import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

// const API_KEY = "f914afd35da285b8249f50aae6a678d5";

const MovieDB_Search = ({ data }) => {
  console.log(data);
  // console.log("data", data.results[0].name);

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
      <h1>검색 결과는!</h1>

      {/* {data.results && (
        <div>
          {data.results.map((item, index) => (
            <div>
              <h2>
                {item.id}. {item.name}
              </h2>
              <h4>
                {" "}
                장르: {item.genre}
                {item.adult ? "청불" : "(청소년 관람 가능)"}{" "}
              </h4>
              <img width={100} src={item.image} />
            </div>
          ))}
        </div>
      )} */}
    </>
  );
};

export default MovieDB_Search;
