import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Footer = props => {

  const displayLinks = path => {
    switch (path) {
      case '/login':
        return (
          <>
            <p><Link to='/reset'>Reset Password</Link> | <Link to='/signup'>Sign Up</Link></p>
          </>
        )
      case '/signup':
        return (
          <>
            <p><Link to='/reset'>Reset Password</Link> | <Link to='/login'>Login</Link></p>
          </>
        )
      case '/reset':
        return (
          <>
            <p><Link to='/login'>Login</Link> | <Link to='/signup'>Sign Up</Link></p>
          </>
        )
      default:
    }
  }

  return (
    <Container className="footer">
      {displayLinks(props.path)}
    </Container>
  )
}

export default Footer;