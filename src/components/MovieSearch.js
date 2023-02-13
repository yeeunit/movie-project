import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const MovieSearch = () => {
  const navigate = useNavigate();

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      // 입력한 검색어를 읽어와서 url을 바꿔준다.

      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <>
      <div className="movie_search_page">
      <h1>Movie Search Page</h1>

        <input type="text" onKeyPress={(event) => search(event)} />
        {/* <button className="serchButton">검색하기</button> */}
        <Button variant='danger'>검색하기</Button>


      </div>
    </>
  );
};

export default MovieSearch;
