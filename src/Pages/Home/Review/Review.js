import React from 'react';
import { Card, } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { name, rating, description, img } = props.review;
    return (
        <Card className='mx-3 mb-5 text-center shadow-sm p-3 mb-5 bg-body rounded border-0'>
            <Card.Img className='img mx-auto' variant="top" src={img} />
            <Card.Body >
                <h2>{name}</h2>
                <Card.Text className='mt-3'>
                    {description}
                </Card.Text>
                <h5>Rating: {rating}/5</h5>
            </Card.Body>
        </Card >
    );
};

export default Review;