import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import store from './store';
import {Provider} from 'react-redux';
import { loadUser } from './actions/auth';
import setAuthToken from './helpers/setAuthToken';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';
import Footer from './components/layout/Footer';
import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        
        <section className='container'>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='services' element={<Services/>} />
            <Route index element={<Home/>} />
            <Route path='register' element={<Register/>} />
            <Route path='login' element={<Login/>} />
          </Routes>
        </section>

        <section className='footer'>
          <Footer />
        </section>
      </div>
    </Router>
    </Provider>
  );
}

export default App;