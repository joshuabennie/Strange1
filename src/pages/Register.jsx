import React, {useState} from 'react';

export default function Register (props) {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [name, setName] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
  console.log(email)


}


return (

<>
<div className='LogIn'>
<form onSubmit = {handleSubmit}>
<label htmlFor="name">Full Name</label>
<input className='input' text={name} name="name" id='name' placeholder='Full Name' />
<label htmlFor='email'>E-mail</label>
<input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />
<label htmlFor="password">Password</label>
<input className='input' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='******' id='password' name='password' />
<button type="submit">Log In</button>
</form>
<button onClick={() => props.onFormSwitch('LogIn')}>Already have an account? Log in here.</button>
</div>
</>


)
}
