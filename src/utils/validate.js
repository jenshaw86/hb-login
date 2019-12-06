// regular expression matches from beginning to end, a string beginning with any number of nums and digits, followed by @symbol, another string of only letters, a dot, and three letters for the domain name. 
// No, this won't account for .io, .tw, etc.

const emailRegex = /^\w+@[a-z]+.[a-z]{3}$/

const validate = (type, value) => {
  // both cases return a boolean
  switch(type) {
    case 'email':
      // does the input match the regex requirements?
      return emailRegex.test(value);
    case 'password':
      // is the password at least 8 characters?
      return value.length < 8 ? false : true;
    default:
  }
}

module.exports = validate;