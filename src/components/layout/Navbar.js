import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { PropTypes } from 'prop-types';
import './Home.css';
import 'react-bootstrap';
import 'bootstrap';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authLinks = (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <span className='nav-link active'>Hello {user && user.name}</span>
        </li>
        <li className="nav-item">
          <a onClick={logout} href='#!' className='logout nav-link active' > Logout </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/register' className='register-link nav-link active'> Register </Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className='login-link nav-link active'> Login </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className='d-block bg-dark'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/' className='navbar-brand app-logo'> <i class="fa-solid fa-code"></i> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-link" href="#">Services</Link>
              </li>
            </ul>
            {!loading && (<div>{ isAuthenticated ? authLinks : guestLinks }</div>)}
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);