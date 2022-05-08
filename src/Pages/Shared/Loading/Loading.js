import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '400px' }} className='container d-flex justify-content-center align-items-center' >
            <Spinner className='mx-auto' animation="border" variant="primary" />
        </div >
    );
};

export default Loading;