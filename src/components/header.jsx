import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='logo'>
                <h1>AYAN</h1>
            </div>
            <div className='navbtn'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </div>
        </nav>
    </div>
  );
};

export default header;
