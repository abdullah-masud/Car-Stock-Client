import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useInventories();

    return (
        <Container className='inventories-container'>
            <h2 className='text-center mt-5'>Inventories</h2>
            <div className='inventories-collection'>
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }

            </div>
            <div className='d-flex justify-content-end manage-inventories-button'>
                <Button as={Link} to='/manageInventories' className='me-3'>Manage Inventories</Button>
            </div>
        </Container >
    );
};

export default Inventories;