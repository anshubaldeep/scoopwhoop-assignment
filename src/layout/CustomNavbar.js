import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Bookmark, List, Person, Search } from "react-bootstrap-icons";
import Logo from "../assets/icons/Logo";
import LogoComp from "../assets/icons/LogoComp";

const CustomNavbar = (props) => {
  const categories = [
    "trending",
    "videos",
    "stories",
    "quizzes",
    "memes",
    "spotlight",
  ];
  return (
    <Navbar bg="transparent" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {props.width>590?<Logo />:<LogoComp/>}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-left">
            {categories.map((cat, index) => (
              <Nav.Link className='nav-text' href="#" key={index}>
                {cat}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className='nav-right'>
            <Nav.Link className='nav-button' href="#"><Bookmark/></Nav.Link>
            <Nav.Link className='nav-button' href="#"><Person/></Nav.Link>
            <Nav.Link className='nav-button' href="#"><Search/></Nav.Link>
            <Nav.Link className='nav-button' href="#"><List className='list'/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
