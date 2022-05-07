import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
        <Container >
            <h1 style={{ color: "rgb(33, 30, 71)" }} className='text-center my-5'>Testimonials</h1>
            <div className='reviews-container mb-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </Container>

    );
};

export default Reviews;