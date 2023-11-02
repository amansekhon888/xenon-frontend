import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import map from '../images/map.png';
import email from '../images/email.png';
import contact from '../images/contact.png';

const Home = () => {
  return (
    <section className='home d-flex flex-column container-fluid'>
        <About/>
        <Services/>
    </section>
  )
}

export default Home