import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Footer = () => {
    const handleEmailClick = (email) => {
        // const mailtoLink = `mailto:${email}`;
        // window.location.href = mailtoLink;
    };
    return (
        <section class="Footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3 info_col">
                        <div class="info_contact">
                            <h4 className='pb-2 pt-3'> Address </h4>

                            <div className='d-flex flex-column'>
                                <a href="https://www.google.com/maps/place/Panjab+University+Swami+Sarvanand+Giri+Regional+Centre/@31.5221392,75.9773709,13.3z/data=!4m6!3m5!1s0x391ae3c77ed7b187:0x7e1e97621f579c17!8m2!3d31.5183039!4d75.9706206!16s%2Fm%2F02wwnhc?authuser=0&entry=ttu" className='pb-2 text-white text-decoration-none' target='_blank'> <i className='fa fa-map-marker' /> <span className='ms-2'> Location </span> </a>
                            </div>
                            <div className='d-flex flex-column'>
                                <a href="tel:1234567890" className='pb-2 text-white text-decoration-none'> <i className='fa fa-phone' /> <span className='ms-2'> Call +01 1234567890 </span> </a>
                            </div>
                            <div className='d-flex flex-column'>
                                <a href="" className='pb-2 text-white text-decoration-none' onClick={handleEmailClick('demo@gmail.com')}> <i className='fa fa-envelope' /> <span className='ms-2'> demo@gmail.com </span> </a>
                            </div>

                        </div>


                        <div class="info_social d-flex flex-row pt-3">
                            <a href="">
                                <i class="fa fa-facebook mx-2 text-white " aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i class="fa fa-twitter mx-2 text-white" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/amandeep-kaur-sekhon-477937215/">
                                <i class="fa fa-linkedin mx-2 text-white" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i class="fa fa-instagram mx-2 text-white" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>


                    <div class="col-md-6 col-lg-3 info_col">
                        <div class="info_detail pt-3">
                            <h4>  Info </h4>
                            <p>
                                necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-2 mx-auto info_col">
                        <div class="info_link_box pt-3">
                            <h4 className='pb-2'> Links </h4>
                            <div class="info_links">

                                <div className='d-flex flex-column'>
                                    <Link to='/' className='pb-2 text-decoration-none text-white'> Home </Link>
                                </div>
                                <div className='d-flex flex-column'>
                                    <Link to='/about' className='pb-2 text-decoration-none text-white'> About Us </Link>
                                </div>
                                <div className='d-flex flex-column'>
                                    <Link to='/services' className='pb-2 text-decoration-none text-white'> Services </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 info_col ">
                        <h4 className='pb-2 pt-3'> Subscribe </h4>
                        <form action="#">
                            <input type="text" className='form-control' placeholder="Enter email" />
                            <button type="submit" className='btn btn-primary fw-semibold mt-3'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
