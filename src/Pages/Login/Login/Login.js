import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading />
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        } else {
            toast('Please enter email address');
        }
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
            <div className='mx-auto w-50'>{errorElement}</div>
            <div className=" w-50 mx-auto">
                <p className='mt-3'>
                    New to Car Stock? <Link to="/register">Create an account</Link>
                </p>
                <p className='mt-3'>
                    Forget Password?<button onClick={resetPassword} className='btn btn-link text-primary text-decoration-none'>Reset Password</button>
                </p>
            </div>
            <SocialLogin />
            <ToastContainer />
        </Container >
    );
};

export default Login;