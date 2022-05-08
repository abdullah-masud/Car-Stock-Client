import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReviews from '../../../hooks/useReviews';
import Loading from '../../Shared/Loading/Loading';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    let elemnt = <Loading />

    return (
        <Container className=''>
            <h1 style={{ color: "rgb(33, 30, 71)" }} className='text-center my-5'>Testimonials</h1>
            <div className='reviews-container mb-1'>
                {
                    reviews.length === 0 ? elemnt : reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
            <div className='d-flex justify-content-end manage-inventories-button mb-4'>
                <Button as={Link} to='/allreviews' className='me-3'>See All Reviews</Button>
            </div>
        </Container>

    );
};

export default Reviews;