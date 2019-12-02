import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import createErrorMessage from '../utils/createErrorMessage';
const validate = require('../utils/validate');

const SignupLoginForm = props => {
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
      alert('logged in!')
    } else { 
      return null;
    }
  }
  
  const validateForm = ev => {
    let valid = true;
    let updatedErrors = {email: '', password: ''}
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
  
  const displayErrorMessage = error => {
    return (
      <Form.Text className="text-muted">
        {error}
      </Form.Text>
    )
  }

  const displayText = path => {
    switch(path) {
      case '/login':
        return 'Log In';
      case '/signup':
        return 'Sign Up';
      default:
    }
  }

  return (
    <Container>
      <h2>{displayText(props.path)}</h2>
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
        <Button variant='light' type='submit' value='submit'>{displayText(props.path)}</Button>
      </Form>
    </Container>
  )
}

export default SignupLoginForm;