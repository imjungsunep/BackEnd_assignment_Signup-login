import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import SignUp from './Schema/SignUpSchema';
import Login from './Schema/LoginSchema';
import { validateLogin } from './Validations/Login_Validation';
import { isValidEmail } from './Validations/Signup_Validation';
import { validatePassword } from './Validations/Signup_Validation';
import { validateConfirmPassword } from './Validations/Signup_Validation';
import { validateSignUp } from './Validations/Signup_Validation';
import { matchPassword } from './Validations/Login_Validation';


const app = express();
const mongoUri = process.env.MONGO_URI;

app.use(express.json());

function SignUp(SignUp) {
  return { 
    email: SignUp.email, 
    name: SignUp.name,
    username: SignUp.username, 
    gender: SignUp.gender, 
    phoneNo: SignUp.phone,
    password: SignUp.password,
    confirm_password: SignUp.confirm_password,
    address: SignUp.address
    };
}
function Login(Login) {
  return { 
    username: Login.username, 
    password: Login.password,
    };
}


app.post('/SignUp', async(req,res)=>{
  const errors = validateSignUp(req.body);
  if (errors.length){
    return res.status(400).json({ message: 'Validation failed.', errors });
  } 
  const email = req.body.email.trim().toLowerCase();
  if (await User.exists({ email })){
    return res.status(400).json({ message: 'An account with this email already exists.' });
  }
   if (!firstName || !lastName || !username || !email || !phone || !password) {
    return response.status(400).json({ message: 'Please complete all required fields.' });
  }
  if (!email.includes('@') || !email.includes('.')) {
    return response.status(400).json({ message: 'Enter a valid email address.' });
  }
  if (password.length < 6) {
    return response.status(400).json({ message: 'Password must be at least 6 characters.' });
  }
  if (password !== confirmPassword) {
    return response.status(400).json({ message: 'Passwords do not match.' });
  }
  const user = await User.create({
    email, name: req.body.name.trim(), 
    password: req.body.password,
    gender: req.body.gender.toLowerCase(), 
    phone: req.body.phone.trim(),
  });
  return res.status(201).json({ message: 'SignUp successful.', user: publicUser(SignUp) });
}
);
app.post('/Login', (req,res)=>{
  const { username , password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'username and password are required.' });
  }
  const user = await Login.findOne({ username: String(username).trim().toLowerCase() });
  if (!user || !matchpass(password, user.password)){
    return res.status(401).json({ message: 'Invalid email or password.' });
  } 
  return res.json({ message: 'Login successful.', user: publicUser(user) });
}
);