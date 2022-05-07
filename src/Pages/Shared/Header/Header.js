import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" >
            <Container>
                <Navbar.Brand as={Link} to="/" className='title'>Car Stock</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={CustomLink} to="/home" active>Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blogs" active>Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to="/about" active>About</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={CustomLink} to="/addnewitem" active>Add Item</Nav.Link>
                                <Nav.Link as={CustomLink} to="/manageInventories" active>Manage Inventories</Nav.Link>

                            </>
                        }
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <Button className='navbar-login-button' onClick={handleSignOut} variant="outline-light">Logout</Button>
                                :
                                <Button as={Link} to='/login' className='navbar-login-button' variant="outline-light">Login</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;