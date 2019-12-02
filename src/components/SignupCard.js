import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import SignupLoginForm from './SignupLoginForm';

export const SignupCard = props => {
  return (
    <Container className="card">
      <SignupLoginForm path={props.match.path} />
      <Footer path={props.match.path} />
    </Container>
  )
}

export default SignupCard;