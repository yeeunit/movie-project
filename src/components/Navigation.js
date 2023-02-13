import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img 
            height={30} 
            // width={120}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt='logo'
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarscroll" />
        <Navbar.Collapse id="navbarscroll">
          <Nav 
          className="me-auto my-2 my-lg-0"
        //   style={{maxHeight:"100px"}}
          navbarScroll>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to = "/movies" className='nav-item'>Movies</Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            />
            <Button variant='danger'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Navigation