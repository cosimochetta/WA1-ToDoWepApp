import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from "react-bootstrap/FormControl"
import Nav from 'react-bootstrap/Nav'

const check_icon = <svg class="bi bi-check-circle mx-1" width="1.8em" height="1.8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd" />
</svg>

const user_icon = <svg class="bi bi-people-circle" width="30" height="30" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
  <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clip-rule="evenodd" />
</svg>

function Header(props) {
  return (<>
    <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
      <Navbar.Toggle aria-controls="left-sidebar" aria-expanded="false" aria-label="Toggle sidebar" onClick={props.showSidebar}/>
      <Navbar.Brand href="#">
        {check_icon}
      </Navbar.Brand>
      <Form inline className="my-2 my-lg-0 mx-auto d-none d-sm-block">
        <FormControl type="search" className="mr-sm-2" placeholder="Search" aria-label="Search query" />
      </Form>
      <Nav className="ml-md-auto">
        <Nav.Link href="#">
          {user_icon}
        </Nav.Link>
      </Nav>
    </Navbar>
  </>
  )
}

export default Header;