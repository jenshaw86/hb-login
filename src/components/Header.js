import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <Link to='/'><h1>HomeBinder</h1></Link>
    </>
  )
}

export default Header;