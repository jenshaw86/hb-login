import React from 'react';
import Container from 'react-bootstrap/Container';
import Reset from './Reset';
import Footer from './Footer';

const ResetCard = props => {
  return (
    <Container className="card">
      <Reset />
      <Footer path={props.match.path} />
    </Container>
  )
}

export default ResetCard;