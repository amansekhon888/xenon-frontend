import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import image from '../../images/about-img.png'

const About = () => {
    return (
        <section className="About">
            <div className="container-fluid">
                <div className="text-center">
                    <h1 className='fw-bold'>
                        About <span className='text-primary'>Us</span>
                    </h1>
                    <p className='fs-5'>
                        Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
                    </p>
                </div>
                <div className="row">
                    <img src={image} alt='' className='col-md-6' />
                    
                    <div className="col-md-6">
                        <div className="detail-box pt-5">
                            <h2 className='fw-bold'>
                                We Are <span className='text-primary'> Hastlers </span>
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                the middle of text. All
                            </p>
                            <p>
                                Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                            </p>
                            <a href="" className='btn btn-outline-primary fw-semibold fs-5'>
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
