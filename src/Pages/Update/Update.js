import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { inventoryId } = useParams();

    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventories/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    const { _id, name, description, supplierName, price, quantity, img } = inventory;

    return (
        <div className='border mt-5 d-flex justify-content-evenly align-items-center'>
            <div className='border border-danger'>
                <img className='w-50 mx-auto d-block' src={img} alt="" />
            </div>
            <div className='border border-danger'>
                <p className='display-6'>{name}</p>
                <h5>Supplier: <span>{supplierName}</span></h5>
                <Card.Title className='mt-3'>{price}</Card.Title>
                <Card.Text className='mt-3'>
                    {description}
                </Card.Text>
                <Card.Title className='mt-3'>Quantity: {quantity}</Card.Title>
            </div>
        </div>
    );
};

export default Update;