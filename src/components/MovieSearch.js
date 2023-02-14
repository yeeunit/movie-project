import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const MovieSearch = () => {
  const navigate = useNavigate();

  // const search = (event) => {
  //   if (event.key === "Enter") {
  //     let keyword = event.target.value;
  //     // 입력한 검색어를 읽어와서 url을 바꿔준다.
  //     navigate(`/?q=${keyword}`);
  //   }
  // };

  const [q, setQ] = useState("");

  return (
    <>
      <div className="movie_search_page">
      <h1>Movie Search Page</h1>

        <input 
        type="search" 
        name="search-form"
        id="search-form"
        className="search-input"
        placeholder="Search for..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        // onKeyPress={(event) => search(event)} 
        />
        {/* <button className="serchButton">검색하기</button> */}
        <Button variant='danger'>검색하기</Button>

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
