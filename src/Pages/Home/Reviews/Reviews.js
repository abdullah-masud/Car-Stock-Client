import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container className=''>
            <h1 style={{ color: "rgb(33, 30, 71)" }} className='text-center my-5'>Testimonials</h1>
            <div className='reviews-container mb-1'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
            <div className='d-flex justify-content-end manage-inventories-button mb-4'>
                <Button as={Link} to='/addnewitem' className='me-3'>Give Review</Button>
            </div>
        </Container>

    );
};

export default Reviews;