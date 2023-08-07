import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import TagLine from './Components/TagLine'
import LogIn from './Components/LogIn'
import Banner1 from './Components/Banner1'
import NavBar from './Components/NavBar'
import Register from './pages/Register'


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }

  return (
<div className='Main'>
  <NavBar />
<Header />
<TagLine />
{



    currentForm === "login" ? <LogIn onFormSwitch={toggleForm}/ > : <Register />


  }

<Banner1 />
</div>
  )

  }

export default App
