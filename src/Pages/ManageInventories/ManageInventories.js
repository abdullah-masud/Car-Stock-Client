import React, { useState } from 'react';
import { Container, Button, Table, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import './ManageInventories.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();

    const navigate = useNavigate();
    const navigateToInventoryUpdate = id => {
        navigate(`/update/${id}`)
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            const url = `http://localhost:5000/inventories/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining)
                    toast('Items Deleted')
                })
        }
    }

    return (
        <Container className='inventories-container mt-4 '>
            <h2 className='text-center my-3 title'>Manage Inventories</h2>
            <div className=''>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className='text-center'>Price</th>
                            <th className='text-end'>Options</th>
                        </tr>
                    </thead>
                </Table>
                {
                    inventories.map(inventory =>
                        <Table key={inventory._id} striped bordered hover>
                            <tbody>
                                <tr>
                                    <td className='align-middle w-25'><h6>{inventory.name}</h6></td>
                                    <td className='align-middle text-center w-50'><h6>{inventory.price}</h6></td>
                                    <td className='text-end w-25 options-button'>
                                        <Button onClick={() => navigateToInventoryUpdate(inventory._id)} className='my-2 me-3' variant="outline-success">Update</Button>
                                        <Button className='my-2 me-3' onClick={() => handleDelete(inventory._id)} variant="outline-danger">Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    )
                }

            </div>
            <div className='d-flex justify-content-end manage-inventories-button'>
                <Button as={Link} to='/addnewitem' className='me-3'>Add New Item</Button>
            </div>
            <ToastContainer />
        </Container >
    );
};

export default ManageInventories;