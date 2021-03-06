const createErrorMessage = (type, updatedErrors) => {
  const errorMessages = {
    email: 'Please enter a valid email',
    password: 'Please enter a password with at least 8 characters'
  }
  // both cases return an object with respective error messages
  switch(type) {
    case 'email':
      return {...updatedErrors, email: errorMessages.email};
    case 'password':
      return {...updatedErrors, password: errorMessages.password};
    default:
  }
}

export default createErrorMessage;