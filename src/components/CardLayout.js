import React from 'react';
import Container from 'react-bootstrap/Container';
import displayLinks from '../utils/displayLinks';

const CardLayout = props => {
  return (
    <Container className="form-card">
      {props.children}
      <div className="links">
        <p>{displayLinks(props.path)}</p>
      </div>
    </Container>
  )
}

export default CardLayout;