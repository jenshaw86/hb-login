import React from 'react';
import Container from 'react-bootstrap/Container';
import SignupLoginForm from './SignupLoginForm';
import Footer from './Footer';

export const LoginCard = props => {
  return (
    <Container>
      <SignupLoginForm path={props.match.path} />
      <Footer path={props.match.path} />
    </Container>
  )
}

export default LoginCard;