import React from 'react';
import google from '../../../images/google.svg'
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div className='w-50 mx-auto mb-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='w-25 bg-secondary'></div>
                <span className='mx-3'>or</span>
                <div style={{ height: "1px" }} className='w-25 bg-secondary'></div>
            </div>
            <button className='continue-with-google mx-auto d-block mt-3 py-3 px-4'>
                <img src={google} alt="" />
                <span className='ms-2'>Continue With Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;