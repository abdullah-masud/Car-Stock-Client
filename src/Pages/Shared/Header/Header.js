import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid className='mx-5 py-2'>
                <Navbar.Brand href="#">Warehouse Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" active>Home</Nav.Link>
                        <Nav.Link href="#action1" active>Inventory</Nav.Link>
                        <Nav.Link href="#action1" active>About</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-light">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;