export function matchPassword(password) {
  return typeof password === 'string' && password.length >= 6 && password.match == password;
}
export function matchUsername(username){
  return typeof username === 'string' && username.length < 3 && username.length > 50 && username.match === username;

}

export function validateLogin(body = {}) {
  const errors = [];
  const {username, password} = body;
  if(!matchUsername(username)){
    errors.push('Username or password does not match');
  }
  if(!matchPassword(password)){
    errors.push('Username or password does not match');
  }
  return errors;
}

