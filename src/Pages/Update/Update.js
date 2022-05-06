import { useEffect, useRef, useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Update.css'

const Update = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    const { _id, name, description, supplierName, price, quantity, img } = inventory;

    useEffect(() => {
        const url = `http://localhost:5000/inventories/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])


    const quantityRef = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        const quantity = quantityRef.current.value;
        console.log(quantity)
        setShow(false)
    };
    const handleShow = () => setShow(true);


    return (
        <div className='update-container shadow-sm p-3 mb-5 bg-body rounded container mt-5 d-flex justify-content-evenly align-items-center'>
            <div className='img '>
                <img className='w-50 rounded-3 mx-auto d-block' src={img} alt="" />
            </div>
            <div className=''>
                <p className='display-6'>{name}</p>
                <p><small>ID: {_id}</small></p>
                <h5>Supplier: <span>{supplierName}</span></h5>
                <Card.Title className='mt-3'>{price}</Card.Title>
                <Card.Text className='mt-3'>
                    {description}
                </Card.Text>
                <Card.Title className='mt-3'>Quantity: {quantity}</Card.Title>
                <div className='mt-3'>
                    <Button className='me-3' variant="outline-success">Delvered</Button>
                    <Button variant="outline-success" onClick={handleShow}>Restock</Button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Quantity</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form.Control ref={quantityRef} type="email" placeholder="Quantity" /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Update;