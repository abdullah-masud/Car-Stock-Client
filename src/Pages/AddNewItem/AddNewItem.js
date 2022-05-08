import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddNewItem.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const item = {
            name: data.name,
            email: user?.email,
            supplierName: data.supplierName,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            img: data.img
        }
        axios.post('https://frozen-springs-65348.herokuapp.com/inventories', item)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    console.log('item added')
                    toast('Items Added')
                }
            })
    };

    return (
        <Container className='w-50 mx-auto addNewItem-container mt-4'>
            <h2 className='my-3 text-center title'>Add New Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <Form.Control required type="text" className='mb-2' placeholder='Name' {...register("name")} />
                <Form.Control required type="text" className='mb-2' placeholder='Supplier Name' {...register("supplierName")} />
                <Form.Control required type="number" className='mb-2' placeholder='Price' {...register("price")} />
                <Form.Control required type="number" className='mb-2' placeholder='Quantity' {...register("quantity")} />
                <Form.Control required className='mb-2' as="textarea" rows={3} placeholder='Description' {...register("description")} />
                <Form.Control required type="text" className='mb-2' placeholder='Photo URL' {...register("img")} />
                <input type="submit" className='add-item-button' value="Add Item" />
            </form>
            <ToastContainer />
        </Container>
    );
};

export default AddNewItem;