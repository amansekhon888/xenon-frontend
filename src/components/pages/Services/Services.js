import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import s1 from '../../images/s1.png';
import s2 from '../../images/s2.png';
import s3 from '../../images/s3.png';

const Services = () => {
    return (
        <section className="Services">
            <div className="container-fluid">
                <div className="text-center">
                    <h1 className='fw-bold'> Our <span className='text-primary'>Services</span> </h1>
                    <p className='fs-5'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                </div>
                <div className="row d-flex grid-row-services">
                    <div className="col-md-4 d-flex flex-column p-4 justify-content-center service-each border border-dark border-opacity-25">
                        <img src={s1} className='rounded mx-auto d-block img-box pt-3'alt='' />
                        <h5 className='fw-semibold text-center'> CURRENCY WALLET </h5>
                        <p className='text-center'> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                    </div>
                    <div className="col-md-4 d-flex flex-column p-4 justify-content-center service-each border border-dark border-opacity-25">
                        <img src={s2} className='rounded mx-auto d-block img-box pt-3'alt='' />
                        <h5 className='fw-semibold text-center'> SECURITY STORAGE </h5>
                        <p className='text-center'> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                    </div>
                    <div className="col-md-4 d-flex flex-column p-4 justify-content-center service-each border border-dark border-opacity-25">
                        <img src={s1} className='rounded mx-auto d-block img-box pt-3'alt='' />
                        <h5 className='fw-semibold text-center'> EXPERT SUPPORT </h5>
                        <p className='text-center'> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center pt-5">
                    <a href="" className='btn btn-outline-primary fs-5 fw-semibold'>
                        View All
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Services