import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MyItem = (props) => {

    const { email, name, price, description, img, quantity, supplierName, _id } = props.item;
    const { handleDelete } = props

    return (
        <Card className='mx-3  mb-5 text-center shadow-sm p-3 mb-5 bg-body rounded border-0'>
            <Card.Img variant="top" src={img} />
            <Card.Body >
                <p className='display-6'>{name}</p>
                <p className=''><small>User: {email}</small></p>
                <h5>Supplier: <span>{supplierName}</span></h5>
                <Card.Title className='mt-3'>${price}</Card.Title>
                <Card.Text className='mt-3'>
                    {description}
                </Card.Text>
                <Card.Title className='mt-3'>Quantity: {quantity}</Card.Title>
                <Button className='my-2' onClick={() => handleDelete(_id)} variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card >
    );
};

export default MyItem;