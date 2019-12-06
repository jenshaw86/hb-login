import React from 'react';
import {Link} from 'react-router-dom';

const resetLink = <Link to='/reset'>Reset Password</Link>
const signupLink = <Link to='/signup'>Signup</Link>
const loginLink = <Link to='/login'>Login</Link>

const displayLinks = path => {
  switch (path) {
    case '/login':
      return (
        <>{resetLink} | {signupLink}</>
      )
    case '/signup':
      return (
        <>{resetLink} | {loginLink}</>
      )
    case '/reset':
      return (
        <>{loginLink} | {signupLink}</>
      )
    default:
  }
}

export default displayLinks;