import React, { useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth,
        { sendEmailVerification: true });

    if (user) {
        navigate('/home')
    }

    if (loading) {
        return <Loading />
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        } else {
            setPasswordError("Password Didn't Match")
        }
    }

    return (
        <Container className='mt-5'>
            <h2 className='text-center'>Sign Up</h2>
            <Form onSubmit={handleRegister} className='w-50 mx-auto '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={confirmPasswordRef} placeholder="Confirm Password" required />
                </Form.Group>
                <Button type='submit' className='mx-auto d-block navbar-login-button' variant="outline-light">Sign Up</Button>
            </Form>
            <div className='mx-auto w-50'>{errorElement}</div>
            <p className='text-danger w-50 mx-auto mt-3'>{passwordError}</p>
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