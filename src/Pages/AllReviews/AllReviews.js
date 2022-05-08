import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Home/Review/Review';
import './AllReviews.css'

const AllReviews = () => {
    const [reviews] = useReviews();

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
            <div className='d-flex justify-content-end manage-inventories-button ms-3 mb-4 all-reviews-button'>
                <Button as={Link} to='/givereview' className='me-3'>Add Review</Button>
            </div>
        </Container>
    );
};

export default AllReviews;