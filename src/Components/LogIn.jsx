import React, {useState} from 'react';


export default function Login(props) {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
  console.log(email)

}


  return (

      <>
      <div className='LogIn'>
   <form onSubmit = {handleSubmit}>
    <label htmlFor='email'>E-mail</label>
    <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />
    <label htmlFor="password">Password</label>
    <input className='input' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='******' id='password' name='password' />
    <button type='submit'>Log In</button>
   </form>
   <button onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
   </div>
   </>

  )
}
