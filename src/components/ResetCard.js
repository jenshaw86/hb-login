import React from 'react';
import Container from 'react-bootstrap/Container';
import Reset from './Reset';
import Footer from './Footer';

const ResetCard = props => {
  return (
    <Container>
      <h2>Reset Password</h2>
      <Reset />
      <Footer path={props.match.path} />
    </Container>
  )
}

export default ResetCard;