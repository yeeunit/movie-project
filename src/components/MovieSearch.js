import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const API_KEY = "f914afd35da285b8249f50aae6a678d5";

const MovieSearch = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState();
  const [result, setResult] = useState();

  const onChangeKeyword = (event) => {
    setKeyword(event.target.value);
    console.log("keyword", keyword);
  };

  const getSearch = async () => {
    let url = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=${keyword}&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    // setResult(data);
  };

  const onClickSearch = (event) => {
    getSearch();
    // navigate(`/movie/search?q=${keyword}`);
  };
  //  const [q, setQ] = useState("");

  return (
    <>
      <div className="movie_search_page">
        <h1>movie search</h1>

        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for..."
          onChange={onChangeKeyword}
          // value={q}
          // onChange={(e) => setQ(e.target.value)}
          // onKeyPress={(event) => search(event)}
        />
        {/* <button className="serchButton">검색하기</button> */}
        <Button variant="danger" onClick={onClickSearch}>
          검색하기
        </Button>

        {/* {items.map((item) => (
               <div className="card-content">
                    <h2 className="card-name">{item.name}</h2>
                </div>
            ))} */}
      </div>
    </>
  );
};

export default MovieSearch;
