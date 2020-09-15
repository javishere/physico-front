import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav, Container, Collapse } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

function App() {
    return (
        <>
        <Container fluid className="App">
            <Navbar  bg="dark" variant = "dark" collapseOnSelect>
                <Navbar.Brand href="/">
                    Physico
                </Navbar.Brand>                
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/signup" >Signup</Nav.Link>
                        <Nav.Link href="/login" eventKey={2} >Login</Nav.Link>
                    </Nav>               
                </Navbar.Collapse>
            </Navbar>
            <Routes />
        </Container>
        </>
    );
}

export default App;