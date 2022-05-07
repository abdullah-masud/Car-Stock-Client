import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../images/notfound.svg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='notFound-container my-5  w-50 mx-auto d-flex flex-column justify-content-center align-items-center'>
                <img className='' width="400px" src={notfound} alt="" />
                <h3 className='mt-5 ' style={{ color: "#2b2765" }}>Not Found</h3>

                <Button className='my-2 w-25 mx-4' as={Link} to="/home" variant="outline-success">Go Home</Button>

            </div>
        </div >
    );
};

export default NotFound;