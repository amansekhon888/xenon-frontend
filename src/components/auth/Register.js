import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { PropTypes } from 'prop-types';
import './Register.css';
import image from '../images/slider-img.png';

const Register = ({ register, isAuthenticated }) => {
    const [formData, updateFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpw: ''
    });

    const { name, email, password, confirmpw } = formData;

    const onChange = e => updateFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== confirmpw) {
            console.log('Passwords must match');
        } else {
            // console.log(formData);
            register({ name, email, password });
        }
    }

    if (isAuthenticated) {
        return <Navigate to='/' />;
    }

    return (
        <div className='register my-5'>
            <div className='row'>
                <div className='col-md-4 mt-5'>
                    <h1 className='large text-primary mt-5'> <strong>Register</strong> </h1>
                    <p className='cta'> <i className="fa-solid fa-address-card"></i> Specify your account info </p>
                    <form className='form' onSubmit={e => onSubmit(e)}>
                        <div className='form-group'>
                            <input type='text' placeholder='Name' name='name' value={name} onChange={e => onChange(e)} required />
                        </div>
                        <div className='form-group'>
                            <input type='email' placeholder='Email Address' name='email' value={email} onChange={e => onChange(e)} required />
                        </div>
                        <div className='form-group'>
                            <input type='password' placeholder='Password' name='password' value={password} onChange={e => onChange(e)} minLength='4' required />
                        </div>
                        <div className='form-group'>
                            <input type='password' placeholder='Confirm Password' name='confirmpw' value={confirmpw} onChange={e => onChange(e)} minLength='4' required />
                        </div>
                        <input type='submit' className="btn btn-primary" value='Register' />
                    </form>
                    <p className='m'>
                        Already have an account? <Link to='/login'> Log In </Link>
                    </p>
                </div>
                <div className='col-md-8 d-flex justify-content-center'>
                    <img className='img-fluid' height='300px' src={image} />
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);