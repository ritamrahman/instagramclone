import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img
          className='logo'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='logo'
        />
      </div>
      <input type='search' className='search' placeholder='search' />
      <div className='header__right'>
        <h5>singin</h5>
        <h4>Ritam</h4>
      </div>
    </div>
  );
}

export default Header;
