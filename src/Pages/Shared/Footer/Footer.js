import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='fixed-bottom footer mt-5 py-3 text-center bg-dark text-white d-flex align-items-center justify-content-evenly'>
            <h4 className='navbar-title' style={{ color: 'white' }}>Car Stock</h4>
            <h6 style={{ color: 'white' }}>Copyright &copy; {year}</h6>
        </footer>
    );
};

export default Footer;