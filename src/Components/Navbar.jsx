import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Github from "../Images/github.svg";
import LinkedIn from "../Images/linkedin.svg";

function NavBar() {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        style={{ backgroundColor: "#e9f0ee" }}
        expand="lg"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/symptoms">Symptoms</Nav.Link>
            <Nav.Link href="/treatment">Treatment</Nav.Link>
            <Nav.Link href="/Ontology">Ontology</Nav.Link>
            <Nav.Link href="https://breastpred.herokuapp.com/predict//predict/">Predict</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com" target="_blank">
              <img src={Github} width="30" height="30" alt="Github" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <img src={LinkedIn} width="30" height="30" alt="Linkedin" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
