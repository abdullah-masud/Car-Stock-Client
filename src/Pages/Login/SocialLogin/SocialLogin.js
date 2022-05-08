import React from 'react';
import google from '../../../images/google.svg'
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        <Loading />
    }

    const [token] = useToken(user)

    /* Require auth code */
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    /* Require auth code ends*/

    return (
        <div className='w-50 mx-auto mb-5 social-login-container'>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='w-25 bg-secondary'></div>
                <span className='mx-3'>or</span>
                <div style={{ height: "1px" }} className='w-25 bg-secondary'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='continue-with-google mx-auto d-block mt-3 py-3 px-4'>
                <img src={google} alt="" />
                <span className='ms-2'>Continue With Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;