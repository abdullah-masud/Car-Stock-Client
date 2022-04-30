import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" >
            <Container>
                <Navbar.Brand as={Link} to="/" className='title'>Car Stock</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={CustomLink} to="/home" active>Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blogs" active>Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className='navbar-login-button' variant="outline-light">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;