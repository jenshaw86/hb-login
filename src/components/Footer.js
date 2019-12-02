import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {

  const displayLinks = path => {
    switch (path) {
      case '/login':
        return (
          <>
            <Link to='/reset'>Reset Password</Link> | <Link to='/signup'>Sign Up</Link>
          </>
        )
      case '/signup':
        return (
          <>
            <Link to='/reset'>Reset Password</Link> | <Link to='/login'>Login</Link>
          </>
        )
      case '/reset':
        return (
          <>
            <Link to='/login'>Login</Link> | <Link to='/signup'>Sign Up</Link>
          </>
        )
      default:
    }
  }

  return (
    <>
      {displayLinks(props.path)}
    </>
  )
}

export default Footer;