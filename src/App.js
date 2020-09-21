import React, { useState, useEffect } from "react";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { Navbar, NavItem, Nav, Container, Collapse } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { Link, useHistory } from "react-router-dom";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";


function App() {
    const history = useHistory();
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [userToken, setUserToken] = useState(null)

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        try {
            await Auth.currentSession() 
            userHasAuthenticated(true);
        }
        catch (e) {
            if (e !== 'No current user') {
                alert(e);
            }
        }

        setIsAuthenticating(false);
    }

    async function handleLogout() {
        await Auth.signOut();
        userHasAuthenticated(false);
        history.push("/login");
    }
    return (

        !isAuthenticating &&
        <Container fluid className="App">
            <Navbar bg="dark" variant="dark" collapseOnSelect>
                <Navbar.Brand href="#/">
                    Physico
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {isAuthenticated
                            ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            : <>
                                <Nav.Link href="#/signup">Singup</Nav.Link>
                                <Nav.Link href="#/login">Login</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
                <Routes />
            </AppContext.Provider>
        </Container>

    );
}

export default App;