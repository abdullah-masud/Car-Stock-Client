import { useEffect, useRef, useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Update.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    const { _id, name, description, supplierName, price, quantity, img } = inventory;



    useEffect(() => {
        const url = `https://car-stock-server-4mqt.onrender.com/inventories/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventory])

    const quantityRef = useRef();
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleRestock = () => {
        const newQuantity = quantityRef.current.value;
        if (newQuantity > 0) {
            const addQuantity = parseInt(quantity) + parseInt(newQuantity);
            const restockInventory = { quantity: addQuantity.toString() };
            const url = `https://car-stock-server-4mqt.onrender.com/inventories/${inventoryId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(restockInventory),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
        setShow(false)
    };

    let sold;
    if (parseInt(quantity) === 0) {
        sold = <span className='text-danger'>Sold</span>
    }

    const handleDelivered = () => {
        const decreaseQuantity = parseInt(quantity) - 1;
        const delivered = { quantity: decreaseQuantity.toString() };
        if (delivered.quantity >= 0) {
            const url = `https://car-stock-server-4mqt.onrender.com/inventories/${inventoryId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(delivered),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }


    return (
        <div className='update'>
            <div className='update-container shadow-sm p-3 mb-3 bg-body rounded container mt-5 d-flex justify-content-evenly align-items-center'>
                <div className='img '>
                    <img className='w-50 rounded-3 mx-auto d-block' src={img} alt="" />
                </div>
                <div>
                    <p className='display-6'>{name}</p>
                    <p><small>ID: {_id}</small></p>
                    <h5>Supplier: <span>{supplierName}</span></h5>
                    <Card.Title className='mt-3'>{price}</Card.Title>
                    <Card.Text className='mt-3'>
                        {description}
                    </Card.Text>
                    <Card.Title className='mt-3'>Quantity:  {parseInt(quantity) === 0 ? sold : quantity}</Card.Title>
                    <div className='mt-3'>
                        <Button className='me-3' variant="outline-success" onClick={handleDelivered}>Delivered</Button>
                        <Button variant="outline-success" onClick={handleShow}>Restock</Button>
                    </div>
                </div>
            </div>
            <div className=' container d-flex justify-content-end mt-4 manage-inventories-button'>
                <Button as={Link} to='/manageInventories' className='me-3'>Manage Inventories</Button>
            </div>


            <Modal show={show} onHide={handleRestock} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Quantity</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form.Control ref={quantityRef} type="number" placeholder="Quantity" /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleRestock}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>

    );
};

export default Update;