import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const SERVER_URL = "http://localhost:3001/api/todo";

export const TodoList = () => {
  const [items, setItems] = useState();
  const [todoList, setTodoList] = useState("");
  const [q, setQ] = useState("");

  useEffect(async () => {
    const result = await axios.get("http://localhost:3001/api/items");
    // console.log('result입니다', result)
    setItems(result.data);
  }, []);

  const fetchData = () => {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    const done = event.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    fetchData();
    // fetch('http://localhost:3001/api/todo', {
    //     method: 'POST',
    //     headers:{
    //         'Content-Type':'application/json',
    //     },
    //     body: JSON.stringify({
    //         text,
    //         done,
    //     }),
    // }).then(() =>fetchData())
  };

  return (
    <div className="todo_list_page">
      <h1>Hello from TodoList</h1>

      {todoList ? (
        <>
          {todoList.map((todo) => (
            <div key={todo.id}>
              <span> {todo.id} : </span>
              <span> {todo.text} </span>
              <span> {todo.done ? "Y" : "N"} </span>

              {/* <form action="delete_process" method="post" onSubmit="return confirm('정말 삭제?')">
                <input type='hidden' name={todo.id} value= {todo.text}/>
                <input type='submit' value='삭제' />
            </form> */}
            </div>
          ))}
        </>
      ) : (
        <div>LOADING...</div>
      )}

      <div className="movie_search_page">
        <h1>movie search</h1>

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
        {/* <button className="searchButton">검색하기</button> */}
        <Button variant="danger">검색하기</Button>

        <div>
          {/* {todoList.map((todo)=> (
            <div key={todo.id}>
                <span> {todo.id} :  </span>
                <span> {todo.text} </span>
                <span> {todo.done ? "Y" : "N" } </span>
            </div>
        ))} */}
        </div>
      </div>

      <form onSubmit={onSubmitHandler}>
        <input name="text" type="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>

      {items ? (
        <>
          <div>
            {items.map((item, index) => (
              <div key={index}>
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>
                  <img width={200} src={item.image} alt="사진" />{" "}
                </div>
                <div>{item.birthday}</div>
                <div>{item.gender}</div>
                <div>{item.job}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>loading...</div>
        </>
      )}
    </div>
  );
};
