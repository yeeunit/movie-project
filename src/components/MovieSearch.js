import React from "react";
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
      <h1>MovieSearch</h1>
      <div>
        <button>검색하기</button>
        <input type="text" onKeyPress={(event) => search(event)} />
      </div>
    </>
  );
};

export default MovieSearch;
