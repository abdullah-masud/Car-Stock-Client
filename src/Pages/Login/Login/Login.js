import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }

    return (
        <Container className='mt-5 login-container'>
            <h2 className='text-center'>login</h2>
            <Form onSubmit={handleLogin} className='w-50 mx-auto '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Button className='mx-auto d-block navbar-login-button' type='submit' variant="outline-light">Login</Button>
            </Form>
            <div className=" w-50 mx-auto">
                <p className='mt-3'>
                    New to Car Stock? <Link to="/register">Create an account</Link>
                </p>
                <p className='mt-3'>
                    Forget Password?<button className='btn btn-link text-primary text-decoration-none'>Reset Password</button>
                </p>
            </div>
            <SocialLogin />
        </Container >
    );
};

export default Login;