import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Reset = props => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' name='email' placeholder='Email' required />
          <Form.Text>We'll send you an email to reset your password.</Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit' value='submit'>Reset Password</Button>
      </Form>
    </>
  )
}

export default Reset;