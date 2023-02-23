import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MovieDB_Search from "../pages/MovieDB_Search";

const API_KEY = "f914afd35da285b8249f50aae6a678d5";

const Navigation = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState();
  const [results, setResults] = useState([]);

  const onChangeKeyword = (event) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };

  const getSearch = async () => {
    let url = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=${keyword}&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    setResults(data.results);
  };
  // console.log("data.results", results);

  const onClickSearch = (event) => {
    getSearch();
    navigate(`/movie/search?q=${keyword}`);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              height={60}
              // width={120}
              src="https://velopert.com/wp-content/uploads/2016/03/react.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarscroll" />
          <Navbar.Collapse id="navbarscroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              //   style={{maxHeight:"100px"}}
              navbarScroll
            >
              <Link to="/" className="nav-item">
                Home
              </Link>
              <Link to="/movies" className="nav-item">
                Movies
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="검색"
                className="me-2"
                aria-label="Search"
                onChange={onChangeKeyword}
              />
              <Button variant="danger" onClick={onClickSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {results && 
        <div style={{display:"none"}}>
        <MovieDB_Search results={results} />
        </div>
      }
    </>
  );
};

export default Navigation;
