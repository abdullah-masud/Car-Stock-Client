import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='mt-5'>
            <h1 className='my-4 text-center'>FAQ</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h6>Difference between javascript and nodejs</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h6>Differences between sql and nosql databases.</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        SQL is Relational Database Management System (RDBMS). These databases have fixed or static or predefined schema. These databases are best suited for complex queries and also they are Vertically Scalable.
                        <br />
                        NoSQL is Non-relational or distributed database system. These databases have dynamic schema. These databases are not so good for complex queries and also they are Horizontally scalable.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h6>What is the purpose of jwt and how does it work</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        JWT (JSON WEB TOKEN) securely transmits information between two parties.
                        It sends information from client side to server. JWT is mainly used for authorization, not authentication.
                        When a client logins with username and password, server creates a token for the client. That token comes form server to client. Client stores the token on either local storage or browser cookie. Then, when the client sends any request to backend, a copy of the token is send to the server for authorization using bearer. Then the server verifies the token before giving the authorization. If the token is verified then the server responds to client's request.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;