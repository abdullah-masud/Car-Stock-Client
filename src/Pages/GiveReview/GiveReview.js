import axios from 'axios';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GiveReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const item = {
            name: user?.displayName,
            description: data.description,
            rating: data.rating,
            img: data.img
        }
        axios.post('https://frozen-springs-65348.herokuapp.com/reviews', item)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Reviews Added')
                }
            })
    };

    return (
        <Container className='w-50 mx-auto addNewItem-container mt-4'>
            <h2 className='my-3 text-center title'>Add Your Review</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <Form.Control required type="text" className='mb-2' disabled placeholder={user?.displayName} {...register("name")} />
                <Form.Control required className='mb-2' as="textarea" rows={3} placeholder='Your review' {...register("description")} />
                <Form.Control required type="number" className='mb-2' placeholder='Rating out of 5' {...register("rating")} />
                <Form.Control required type="text" className='mb-2' placeholder='Photo URL' {...register("img")} />
                <input type="submit" className='add-item-button' value="Add Review" />
            </form>
            <ToastContainer />
        </Container>
    );
};

export default GiveReview;