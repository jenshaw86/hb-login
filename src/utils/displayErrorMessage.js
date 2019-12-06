import React from 'react';
import Form from 'react-bootstrap/Form'

// displays message if there is a message to display
const displayErrorMessage = error => {
  return (
    <Form.Text className="text-muted">
      {error}
    </Form.Text>
  )
}

export default displayErrorMessage;