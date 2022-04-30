import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <Container className='mt-5'>
            <h2 className='text-center'>Sign Up</h2>
            <Form className='w-50 mx-auto '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button className='mx-auto d-block navbar-login-button' variant="outline-light">Sign Up</Button>
            </Form>
            <div className=" w-50 mx-auto">
                <p className='mt-3'>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
            <SocialLogin />
        </Container >
    );
};

export default Register;