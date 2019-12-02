// const handleError = require('./handleError')
import createErrorMessage from '../utils/createErrorMessage'

describe('error handling', () => {
  it ('returns en email error message', () => {
    const errorMessage = {email: 'Please enter a valid email', password: ''};
    const updatedErrors = {email: '', password: ''};
    const type = 'email';
    expect(createErrorMessage(type, updatedErrors)).toStrictEqual(errorMessage);
  })
  
  it ('returns a password error message', () => {
    const errorMessage = {email: 'Please enter a valid email', password: 'Please enter a password with at least 8 characters'};
    const updatedErrors = {email: 'Please enter a valid email', password: ''};
    const type = 'password';
    expect(createErrorMessage(type, updatedErrors)).toStrictEqual(errorMessage);
  })
})