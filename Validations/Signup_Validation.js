const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return emailPattern.test(String(email || '').trim());
}
export function validatePassword(password) {
  return typeof password === 'string' && password.length >= 6;
}
export function validateConfirmPassword(password) {
  return typeof password === 'string' && password.length >= 6 && password.match == password;
}


export function validateSignUp(body = {}) {
  const errors = [];
  const { email = '', name, username, password, confirm_password, gender, phone} = body;
  if (!isValidEmail(email)) {
    errors.push('Provide a valid email address.');
  }
  if (!name || String(name).trim().length < 3 || String(name).trim().length > 50){
    errors.push('Name must be between 3 and 50 characters.');
  } 
  if (!validatePassword(password)){
    errors.push('Password must be at least 6 characters long.');
  }
  if (!validateConfirmPassword(confirm_password)){
    errors.push('Password does not match.');
  }
  if (gender && !['male', 'female', 'other'].includes(String(gender).toLowerCase())) {
    errors.push('Gender must be male, female, other');
  }
  if (phone && !/^[0-9+()\-\s]{7,20}$/.test(String(phone))){
    errors.push('Provide a valid phone number.');
  }
  return errors;
}
