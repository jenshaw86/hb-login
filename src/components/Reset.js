import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Reset = () => {
  return (
    <>
      <h2>Reset Password</h2>
      <Form>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' name='email' placeholder='Email' required />
          <Form.Text>We'll send you an email to reset your password.</Form.Text>
        </Form.Group>
        <div className="button-bar">
          <Button variant='light' type='submit' value='submit'>Reset Password</Button>
        </div>
      </Form>
    </>
  )
}

export default Reset;