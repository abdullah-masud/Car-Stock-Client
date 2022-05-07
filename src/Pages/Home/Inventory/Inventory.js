import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = (props) => {
    const { _id, name, price, description, img, quantity, supplierName } = props.inventory;

    const navigate = useNavigate();
    const navigateToInventoryUpdate = id => {
        navigate(`/update/${id}`)
    }

    let sold;
    if (parseInt(quantity) === 0) {
        sold = <span className='text-danger'>Sold</span>
    }

    return (
        <Card className='mx-3  mb-5 text-center shadow-sm p-3 mb-5 bg-body rounded border-0'>
            <Card.Img variant="top" src={img} />
            <Card.Body >
                <p className='display-6'>{name}</p>
                <h5>Supplier: <span>{supplierName}</span></h5>
                <Card.Title className='mt-3'>{price}</Card.Title>
                <Card.Text className='mt-3'>
                    {description}
                </Card.Text>
                <Card.Title className='mt-3'>Quantity:  {parseInt(quantity) === 0 ? sold : quantity}</Card.Title>
                <Button onClick={() => navigateToInventoryUpdate(_id)} className='my-2' variant="outline-success">Update</Button>
            </Card.Body>
        </Card >
    );
};

export default Inventory;