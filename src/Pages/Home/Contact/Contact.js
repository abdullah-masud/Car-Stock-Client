import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import './Contact.css'

const Contact = () => {
    const [user] = useAuthState(auth);

    const messageRef = useRef();

    const handleSendButton = () => {
        const message = messageRef.current.value;
        if (message) {
            toast('Message Sent')
        } else {
            toast('Write Messages')
        }
    }

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
                    <Form.Control ref={messageRef} type="text" as="textarea" placeholder="Your Message" />
                </Form.Group>

                <Button variant="outline-primary" onClick={handleSendButton}>Send</Button>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Contact;