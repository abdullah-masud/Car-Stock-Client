import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Inventory.css'

const Inventory = (props) => {
    const { name, price, description, img, quantity, supplierName } = props.inventory;
    return (
        <Card className='mx-3 mb-5 text-center shadow-sm p-3 mb-5 bg-body rounded border-0'>
            <Card.Img variant="top" src={img} />
            <Card.Body >
                <p className='display-6'>{name}</p>
                <h5>Supplier: <span>{supplierName}</span></h5>
                <Card.Title className='mt-3'>{price}</Card.Title>
                <Card.Text className='mt-3'>
                    {description}
                </Card.Text>
                <Card.Title className='mt-3'>Quantity: {quantity}</Card.Title>
                <Button as={Link} to='/update' className='my-2' variant="outline-success">Update</Button>
            </Card.Body>
        </Card >
    );
};

export default Inventory;