import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    return (
        <Container >
            <h2 className='text-center mt-5'>Inventories</h2>
            <div className='inventories-collection mb-5'>
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </Container>
    );
};

export default Inventories;