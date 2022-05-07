import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddNewItem.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/inventories`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Items Added')
                data.target.reset();
            })
    };

    return (
        <Container className='w-50 mx-auto addNewItem-container mt-4'>
            <h2 className='mb-3 text-center'>Add New Item</h2>
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