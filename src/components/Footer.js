import React from 'react';
import Container from 'react-bootstrap/Container';
import displayLinks from '../utils/displayLinks';

const Footer = props => {
  return (
    <Container className="footer">
      {props.children}
      <p>{displayLinks(props.path)}</p>
    </Container>
  )
}

export default Footer;