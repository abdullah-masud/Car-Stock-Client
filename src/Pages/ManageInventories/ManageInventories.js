import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import Inventory from '../Home/Inventory/Inventory';
import './ManageInventories.css'

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();

    return (
        <Container className='inventories-container'>
            <h2 className='text-center my-3'>Manage Inventories</h2>
            <div className=''>
                {
                    inventories.map(inventory =>
                        <Table key={inventory._id} striped hover>
                            <tbody>
                                <tr className=' '>
                                    <td className='align-middle'><h6>{inventory.name}</h6></td>
                                    <td className='text-end'>
                                        <Button className='my-2' variant="outline-success">Delete</Button>

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
        </Container >
    );
};

export default ManageInventories;