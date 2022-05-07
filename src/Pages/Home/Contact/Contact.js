import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Contact.css'

const Contact = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='contact-container container shadow-sm p-3 mb-5 bg-body rounded '>
            <h2 className='text-center mb-5'>Contact Us</h2>
            <Form className='w-50 mx-auto form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Name" value={user?.displayName} disabled />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" value={user?.email} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" as="textarea" placeholder="Your Message" />
                </Form.Group>

                <Button variant="outline-primary">Send</Button>

            </Form>
        </div>
    );
};

export default Contact;