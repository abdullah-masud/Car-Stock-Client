import { Carousel } from 'react-bootstrap'
import React, { useState } from 'react';
import img1 from '../../../images/carousel images/img1.png'
import img2 from '../../../images/carousel images/img2.png'
import img3 from '../../../images/carousel images/img3.png'
import img4 from '../../../images/carousel images/img4.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
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
                    src={img1}
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
                    src={img4}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default Banner;