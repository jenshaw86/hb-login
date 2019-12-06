const validate = require('../utils/validate')
// import validate from '../utils/validate';

describe ('password validation', () => {
  it('validates password', () => {
    expect(validate('password', '12345678')).toBe(true);
  });
  
  it('invalidates a blank password', () => {
    expect(validate('password', '')).toBe(false);
  });

  it('invalidates a short password', () => {
    expect(validate('password', '12345')).toBe(false);
  });
});

describe('email validation', () => {
  it('returns true for valid email', () => {
    expect(validate('email', 'thisisanemail@email.com')).toBe(true);
  })
  
  it('returns false for blank email', () => {
    expect(validate('email', '')).toBe(false);
  })
  
  it('returns false if email doesn\'t contain @ or .', () => {
    expect(validate('email', 'thisisanemail')).toBe(false);
  })

  it('returns false if email doesn\'t contain @', () => {
    expect(validate('email', 'thisisanemail.com')).toBe(false);
  })
  
  it('returns false if email contains multiple @s', () => {
    expect(validate('email', 'this@is@anemail.com')).toBe(false);
  })
  
  it('returns false if email has multiple domains', () => {
    expect(validate('email', 'thisis@anemail.com.com')).toBe(false);
  })
})
  