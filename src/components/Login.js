import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import createErrorMessage from '../utils/createErrorMessage';
import displayErrorMessage from '../utils/displayErrorMessage';
import displayFormHeader from '../utils/displayFormHeader';

const validate = require('../utils/validate');

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({email: '', password: ''});

  const handleChange = ev => {
    ev.persist();
    const {type, value} = ev.target;
    switch (type) {
      case "email": 
        setEmail(value);
        break;
      case "password": 
        setPassword(value)
        break;
      default:
    } 
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    ev.persist();
    if (validateForm(ev) === true) {
      window.location.href = 'homebinder.com'
    } else {
      return null;
    }
  }
  
  const validateForm = ev => {
    // assumes form is valid, until it isn't.
    // assumes there are no error messages, when invalidated, will add messages
    let valid = true;
    let updatedErrors = {email: '', password: ''}
    // iterate through form names and values, and validate each input
    // if input is invalidated, create error message and update errors
    for (let i = 0; i < 2; i++) {
      const [type, value] = [ev.target[i].name, ev.target[i].value]
      if (validate(type, value) === false) {
        valid = false;
        updatedErrors = createErrorMessage(type, updatedErrors);
      }
    }
    setErrors(updatedErrors);
    return valid;
  }

  return (
    <Container>
      <h2>{displayFormHeader(props.path)}</h2>
      <Form noValidate onSubmit={handleSubmit} className="form">
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' name='email' value={email} placeholder='Email' onChange={ev => handleChange(ev)} required />
          {displayErrorMessage(errors.email)}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' value={password} placeholder='Password' onChange={ev => handleChange(ev)} required />
          {displayErrorMessage(errors.password)}
        </Form.Group>
        <div className="button-bar">
          <Button variant='light' type='submit' value='submit'>{displayFormHeader(props.path)}</Button>
        </div>
      </Form>
    </Container>
  )
}

export default Login;