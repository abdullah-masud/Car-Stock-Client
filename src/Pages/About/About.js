import { Carousel, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import person from '../../images/person.png'
import img1 from '../../images/carousel images/img1.png'
import img2 from '../../images/carousel images/img2.png'
import img3 from '../../images/carousel images/img3.png'
import img4 from '../../images/carousel images/img4.png'
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='about mt-5 shadow-sm p-3 mb-5 bg-body rounded container d-flex justify-content-around align-items-center'>
            <div className='info'>
                <h1 style={{ color: 'rgb(33, 30, 71)' }}>We Are Car Stock</h1>
                <h6 className='my-3 d-inline-block p-3'>Car Warehase Management</h6>
                <p style={{ color: 'rgb(33, 30, 71)', fontSize: '16px' }} className='w-75'>All of the most recent automobiles in our inventory can be found here. You may select your preferred vehicle from our website and have it delivered to your specified location. We provide a wide range of vehicles, from luxury to standard. Ferrari to Lamborghini, and everything in between. </p>
                <div className='d-flex manage-inventories-button'>
                    <Button as={Link} to='/home' className='me-3'>Home</Button>
                </div>
            </div>
            <div className='w-100'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div >
    );
};

export default About;