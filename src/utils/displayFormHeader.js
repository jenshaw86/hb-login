const displayFormHeader = path => {
  switch(path) {
    case '/login':
      return 'Log In';
    case '/signup':
      return 'Sign Up';
    default:
  }
}

export default displayFormHeader;